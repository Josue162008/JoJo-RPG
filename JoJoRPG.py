import webview
import json
html_file_path = 'http://localhost:3001/cadastro-login'

webview.create_window('JoJo\'s RPG', html_file_path)

with open("json/dados_python.json", encoding='utf-8') as meu_json:
    dados = json.load(meu_json)

print(dados)

webview.start()