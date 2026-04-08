@echo off
echo Iniciando servidor de desarrollo...
echo Abriendo navegador en http://localhost:3000
timeout /t 2 >nul
start http://localhost:3000
npm run dev
