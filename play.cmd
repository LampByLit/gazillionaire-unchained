@echo off
rem Serves Gazillionaire Unchained from this folder and opens it in the browser.
cd /d "%~dp0"
set PY=%LOCALAPPDATA%\Programs\Python\Python312\python.exe
powershell -NoProfile -Command "try { Invoke-WebRequest http://localhost:8643/ -UseBasicParsing -TimeoutSec 2 | Out-Null } catch { Start-Process -WindowStyle Hidden '%PY%' '-m','http.server','8643','--directory','%~dp0.' }"
start "" http://localhost:8643/index.html
