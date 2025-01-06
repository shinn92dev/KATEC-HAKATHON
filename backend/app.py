from flask import Flask, jsonify, request, session, redirect
from flask_cors import CORS
import requests
from dotenv import load_dotenv
import os
from urllib.parse import quote


load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SESSION_SECRET_KEY")
CORS(app)
PAYPAL_API_BASE = "https://api-m.sandbox.paypal.com"
PAYPAL_CLIENT_ID = os.getenv("PAYPAL_CLIENT_ID")
PAYPAL_CLIENT_SECRET= os.getenv("PAYPAL_SECRET_KEY")




@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "OK", "message": "Flask-React connection successful!"})


@app.route("/check_paypal_connected", methods=["GET"])
def check_paypal_connected():
    """
    로그인 시 이미 paypal 계정이 연결되어 있는지 확인
    """
    paypal_token = session.get("paypal_access_token")
    is_connected = paypal_token is not None
    return jsonify({"connected": is_connected})


def get_client_credentials_token():
    url = f"{PAYPAL_API_BASE}/v1/oauth2/token"
    auth = (PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
    data = {"grant_type": "client_credentials"}
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    resp = requests.post(url, auth=auth, data=data, headers=headers)
    if resp.status_code == 200:
        return resp.json()["access_token"]
    else:
        raise Exception(f"Token error: {resp.text}")
    
@app.route("/create_partner_referral", methods=["POST"])
def create_partner_referral():
    """
    사용자가 PayPal 계정을 연결하고 싶을 때 호출
    1) 이 API가 PayPal에 'Partner Referrals' 요청을 생성
    2) PayPal이 응답으로 onboarding 'action_url'을 줌
    3) 그 URL로 사용자 리다이렉트
    """
    print("CREATE_PARTNER_REFERAL ACCESSED")
    try:
        # A. Access Token 발급
        access_token = get_client_credentials_token()
        
        # B. Partner Referrals API 호출 준비
        url = f"{PAYPAL_API_BASE}/v2/customer/partner-referrals"
        headers = {
            "Content-Type": "application/json",
            "Authorization": f"Bearer {access_token}"
        }
        
        # POST Body 예시 (간소화)
        # 실제로는 operations / products / legal_consents 등 더 자세히 설정 가능
        body = {
            "partner_config_override": {
                "return_url": "http://localhost:5000/paypal_return",
            },
            "operations": [
                {
                    "operation": "API_INTEGRATION",
                    "api_integration_preference": {
                        "rest_api_integration": {
                            "integration_method": "PAYPAL",
                            "integration_type": "THIRD_PARTY",
                            "third_party_details": {
                                # User -> we want to read transactions or do payment
                                "features": ["PAYMENT", "REFUND"]
                            }
                        }
                    }
                }
            ],
            "products": ["EXPRESS_CHECKOUT"],
            "legal_consents": [
                {
                    "type": "SHARE_DATA_CONSENT",
                    "granted": True
                }
            ]
        }
        
        # C. Partner Referrals 요청
        resp = requests.post(url, headers=headers, json=body)
        if resp.status_code in [201, 200]:
            data = resp.json()
            # links 배열 중 rel=action_url 찾기
            action_url = None
            for link in data.get("links", []):
                if link.get("rel") == "action_url":
                    action_url = link.get("href")
                    break
            if not action_url:
                return jsonify({"error": "No action_url found in response"}), 400
            
            # D. 프론트엔드에 이 action_url을 넘겨주면,
            #    프론트에서 window.location.href = action_url 로 사용자 이동
            print("Action url passed")
            print(action_url)
            return jsonify({"action_url": action_url})
        else:
            return jsonify({"error": "Partner Referral failed", "details": resp.text}), resp.status_code
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# # 3) PayPal 온보딩 완료 후 돌아오는 return_url
# @app.route("/paypal_return", methods=["GET"])
# def paypal_return():
#     """
#     PayPal에서 사용자가 동의를 완료하면 여기로 돌아옴(?merchantId=xxx 등 파라미터 전달).
#     실제로는 query params or PayPal docs를 보고
#     어떤 정보(merchant_id, payer_id, onboarding status 등)를 받는지 처리.
#     """
#     # 예) PayPal이 ?merchantId=xxx&trackingId=xxx... 이런 파라미터를 붙여줄 수 있음
#     print("Return started")
#     merchant_id = request.args.get("merchantId", "")
#     # 이 정보를 DB에 저장하여 "사용자 - merchant_id" 매핑 -> 사용자 PayPal 계정 연결
#     session["paypal_merchant_id"] = merchant_id
    
#     return redirect("http://localhost:3000/usermain")  # React 화면으로 돌아간다고 가정



if __name__ == "__main__":
    app.run(debug=True, port=5000)
