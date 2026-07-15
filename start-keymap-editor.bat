@echo off
cd /d "%~dp0"

set "PY=python"
if exist "%LocalAppData%\Programs\Python\Python312\python.exe" set "PY=%LocalAppData%\Programs\Python\Python312\python.exe"

echo Starting torabo-tsuki keymap editor...
echo Using python: %PY%
echo Do not close the new window that opens - it is the local server.

start "keymap-editor-server" "%PY%" -m http.server 8743
timeout /t 2 /nobreak >nul
start "" http://localhost:8743/keymap-editor.html
