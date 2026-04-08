@echo off
echo Configurando GitHub Pages con GitHub Actions...
echo.

echo 1. Ve a tu repositorio en GitHub
echo 2. Click en Settings -^> Pages
echo 3. En "Source" selecciona "GitHub Actions"
echo 4. Espera a que se complete el primer deploy
echo.
echo 5. Tu URL sera: https://agustinalonso2303-star.github.io/mi-app-optimizada
echo.
echo 6. Si no aparece "GitHub Actions" en Source:
echo    - Ve a Settings -^> Actions -^> General
echo    - En "Workflow permissions" selecciona "Read and write permissions"
echo    - Marca "Allow GitHub Actions to approve and run pull requests"
echo    - Save changes
echo.
echo 7. Para verificar el deploy:
echo    - Ve a la pestaña "Actions" en tu repositorio
echo    - Busca el workflow "Deploy to GitHub Pages"
echo    - Espera a que termine (verde)
echo.
echo Presiona cualquier tecla para abrir tu repositorio...
pause >nul
start https://github.com/agustinalonso2303-star/mi-app-optimizada/settings/pages
