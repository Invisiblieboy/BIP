import datetime as dt
import json
import time
from datetime import datetime, timedelta

from data.settings import BIP_address, BIP_decimals


def get_seconds_until_tomorrow_utc():
    now = datetime.today()
    now_utc = datetime.strptime(datetime.now(dt.UTC).strftime('%Y%m%d%H%M%S'), '%Y%m%d%H%M%S')
    tomorrow_date = datetime.strptime((now + timedelta(days=1)).strftime('%Y%m%d'), '%Y%m%d')
    offset = now - now_utc
    return (tomorrow_date - now + offset).seconds


def events_parse(events: dict):
    operations = {}
    for event in events['events']:
        acc_address = event['account']['address']
        timestamp = event['timestamp']
        for action in event['actions']:
            if action['type'] != 'JettonTransfer':
                continue
            transfer = action['JettonTransfer']
            if transfer['jetton']['address'] != BIP_address:
                continue

            amount = float(transfer['amount']) / BIP_decimals
            if transfer['sender']['address'] == acc_address:
                amount *= -1

            operations[timestamp] = {'value': amount}
    return operations


if __name__ == '__main__':
    a = '{"events":[{"event_id":"f61389aed836dab413a2956226dd3fff9a363d22d2aac94984cd789f7427f51f","account":{"address":"0:7bab9a988423802106e15a5228abbf195e91995919fe819737d3e09272465231","is_scam":false,"is_wallet":true},"timestamp":1748524386,"actions":[{"type":"JettonTransfer","status":"failed","JettonTransfer":{"sender":{"address":"0:7bab9a988423802106e15a5228abbf195e91995919fe819737d3e09272465231","is_scam":false,"is_wallet":true},"recipient":{"address":"0:2fae5dcf266e52964b72636f5f66f9b13ccbdc08db91060bb07a2cda49ddbae4","is_scam":false,"is_wallet":false},"senders_wallet":"0:1527e50b121e63cde4a416cde0c34c579027abb36c1a7066aef38d005bf5ae3d","recipients_wallet":"0:0000000000000000000000000000000000000000000000000000000000000000","amount":"10000000000","comment":"Call: DedustSwap","jetton":{"address":"0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9","name":"BIPCoin","symbol":"BIP","decimals":9,"image":"https://cache.tonapi.io/imgproxy/kffsN_YawbMfJAVKe6G327VIGZkHiQDAolr7LIS0zLU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9zdGF0aWMuYmlwdG9rZW4ueHl6L3BuZy9saW9uLzBfMC5wbmc.webp","verification":"none","score":0}},"simple_preview":{"name":"Jetton Transfer","description":"Перевод 10 BIPCoin","value":"10 BIPCoin","value_image":"https://cache.tonapi.io/imgproxy/kffsN_YawbMfJAVKe6G327VIGZkHiQDAolr7LIS0zLU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9zdGF0aWMuYmlwdG9rZW4ueHl6L3BuZy9saW9uLzBfMC5wbmc.webp","accounts":[{"address":"0:2fae5dcf266e52964b72636f5f66f9b13ccbdc08db91060bb07a2cda49ddbae4","is_scam":false,"is_wallet":false},{"address":"0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9","is_scam":false,"is_wallet":false}]},"base_transactions":["faf29eccb79abaf3933275fa1d08445eb50c67bfde86a69ebc09423c12a7a880"]}],"is_scam":false,"lt":57712137000001,"in_progress":true,"extra":-204224938},{"event_id":"46f0d5b7c2460deaab88a996bf34d35aa7d17a137898a6554165256cef4eaac4","account":{"address":"0:7bab9a988423802106e15a5228abbf195e91995919fe819737d3e09272465231","is_scam":false,"is_wallet":true},"timestamp":1748522269,"actions":[{"type":"JettonTransfer","status":"ok","JettonTransfer":{"sender":{"address":"0:2560d4b49de66447eac2c4a2405402ee736362fd0887ca3ac4aa3835f3268d8e","is_scam":false,"is_wallet":true},"recipient":{"address":"0:7bab9a988423802106e15a5228abbf195e91995919fe819737d3e09272465231","is_scam":false,"is_wallet":true},"senders_wallet":"0:bab6cfc6b934872cdb2fda395785d64f7335df22dd55444b5f7f61ad28495a70","recipients_wallet":"0:1527e50b121e63cde4a416cde0c34c579027abb36c1a7066aef38d005bf5ae3d","amount":"2908647911","comment":"Спасибо за покупку BIP на 0.5 TON","jetton":{"address":"0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9","name":"BIPCoin","symbol":"BIP","decimals":9,"image":"https://cache.tonapi.io/imgproxy/kffsN_YawbMfJAVKe6G327VIGZkHiQDAolr7LIS0zLU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9zdGF0aWMuYmlwdG9rZW4ueHl6L3BuZy9saW9uLzBfMC5wbmc.webp","verification":"none","score":0}},"simple_preview":{"name":"Jetton Transfer","description":"Перевод 2.908647911 BIPCoin","value":"2.908647911 BIPCoin","value_image":"https://cache.tonapi.io/imgproxy/kffsN_YawbMfJAVKe6G327VIGZkHiQDAolr7LIS0zLU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9zdGF0aWMuYmlwdG9rZW4ueHl6L3BuZy9saW9uLzBfMC5wbmc.webp","accounts":[{"address":"0:2560d4b49de66447eac2c4a2405402ee736362fd0887ca3ac4aa3835f3268d8e","is_scam":false,"is_wallet":true},{"address":"0:786e74bba071d57c75004bb41bf978ea73e00b03f3f3fbf2b73ea0426f97d6e9","is_scam":false,"is_wallet":false}]},"base_transactions":["762d7b820a8d9d37e514a809c1aa3d4e318380a9304bebc76a913db9e8143097","eb2291b60a3483499c89e2431abaa03376b5d1e4c3b78a425170f641202d6bee","ce3ae750d9f6c85af1865e82e1d65ba2dde4a4a1d103957574143fe1ec60ae02","0ee7a490b50f7ff6fcc473df8daf8ca751c945f83fde4edd5ac1f30a2cc43c7a"]}],"is_scam":false,"lt":57711233000001,"in_progress":false,"extra":603588}],"next_from":57711233000001}'
    b = json.loads(a)
    c = __get_bonus({"balance": 100, "transactions": events_parse(b)}, value=0.1, end_date=time.time() - 23 * 60 * 60)
    print(c)
