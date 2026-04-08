@echo off
echo Instalando Node.js y dependencias...
echo.

echo 1. Descargando Node.js...
start https://nodejs.org/en/download/

echo.
echo 2. Despues de instalar Node.js, presiona cualquier tecla para continuar...
pause >nul

echo.
echo 3. Instalando dependencias del proyecto...
npm install

echo.
echo 4. Iniciando servidor de desarrollo...
npm run dev

pause
