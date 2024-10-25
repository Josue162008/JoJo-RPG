import webview
import subprocess

html_file_path = 'http://localhost:3000/cadastro-login'

webview.create_window('JoJo\'s RPG', html_file_path)

webview.start()