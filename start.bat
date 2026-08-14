@echo off
title Green Smile - Website
cd /d "%~dp0"
echo =========================================
echo  Iniciando o servidor Green Smile...
echo  O navegador sera aberto em instantes...
echo =========================================
start http://localhost:5173
cmd /c npm run dev
pause
