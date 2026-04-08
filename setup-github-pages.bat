@echo off
echo Configurando repositorio para venta profesional...
echo.

echo 1. Creando repositorio GitHub...
echo Ve a https://github.com/new
echo Nombre del repositorio: mi-app-optimizada
echo Marca "Public" y "Add a README file"
echo Presiona cualquier tecla cuando termines...
pause >nul

echo.
echo 2. Conectando repositorio local...
git remote add origin https://github.com/agustinalonso2303-star/mi-app-optimizada.git
git branch -M main

echo.
echo 3. Subiendo codigo a GitHub...
git push -u origin main

echo.
echo 4. Configurando GitHub Pages...
echo Ve a tu repositorio -^> Settings -^> Pages
echo Selecciona "GitHub Actions" como source
echo Presiona cualquier tecla cuando termines...
pause >nul

echo.
echo 5. Tu demo estara disponible en:
echo https://agustinalonso2303-star.github.io/mi-app-optimizada
echo.
echo 6. Para conectar a Vercel:
echo - Ve a vercel.com
echo - Importa tu repositorio de GitHub
echo - Configura las variables de entorno
echo.
echo Listo! Ahora puedes vender el URL del repositorio.
pause
