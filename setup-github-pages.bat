@echo off
echo 🚀 Configurando GitHub Pages para tu proyecto...
echo.

REM Verificar si git está instalado
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git no está instalado. Por favor, instala Git primero.
    echo Descarga: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Inicializar repositorio si no existe
if not exist .git (
    echo 📁 Inicializando repositorio Git...
    git init
    git add .
    git commit -m "Initial commit: Mi página web"
)

REM Verificar si hay remoto configurado
git remote -v | findstr "origin" >nul
if %errorlevel% neq 0 (
    echo 🔗 Configurando repositorio remoto...
    echo.
    echo Por favor, ingresa la URL de tu repositorio GitHub:
    echo Ejemplo: https://github.com/tu-usuario/caja-windsurf.git
    set /p repo_url="URL del repositorio: "
    
    git remote add origin %repo_url%
    git branch -M main
)

REM Subir cambios a GitHub
echo 📤 Subiendo cambios a GitHub...
git push -u origin main

echo.
echo ✅ ¡Proyecto configurado correctamente!
echo.
echo 📋 Pasos finales:
echo 1. Ve a tu repositorio en GitHub
echo 2. Haz clic en Settings → Pages
echo 3. En "Source", selecciona "Deploy from a branch"
echo 4. Elige la rama "main" y carpeta "/root"
echo 5. Haz clic en "Save"
echo.
echo 🌐 Tu sitio estará disponible en:
echo https://[tu-usuario].github.io/caja-windsurf/
echo.
pause
