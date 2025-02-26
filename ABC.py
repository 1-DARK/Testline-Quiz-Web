import requests
import json

res = requests.get('https://api.jsonserve.com/Uw5CrX')
data = json.loads(res.text) 
formatted_json = json.dumps(data, indent=4, ensure_ascii=False)
with open('data.json', 'w', encoding='utf-8') as f:
    f.write(formatted_json)
