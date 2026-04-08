# Optimized Supabase + Vercel App

Proyecto optimizado para minimizar cold starts en Vercel utilizando Supabase como backend.

## 🚀 Configuración Inicial

### 1. Crear Repositorio GitHub
```bash
# Crear nuevo repositorio en GitHub: "mi-app-optimizada"
# Luego conectar este folder:
git remote add origin https://github.com/TU_USERNAME/mi-app-optimizada.git
git branch -M main
git push -u origin main
```

### 2. Configurar Supabase
1. Ir a https://supabase.com
2. Crear nuevo proyecto
3. Copiar URL y API Key en `.env.local`

### 3. Configurar Vercel
1. Conectar repositorio GitHub a Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push

## 🛠️ Desarrollo Local

```bash
npm install
npm run dev
# O doble clic en start-dev.bat
```

## 📋 Variables de Entorno

Crear `.env.local`:
```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu-api-key
```

## 🎯 Anti-Cold Start Features

- Keep-alive automático cada 3 minutos
- Endpoints optimizados con minInstances: 1
- Headers anti-cache configurados
- GitHub Actions para pings externos

## � Estructura del Proyecto

```
caja-windsurf/
├── api/                 # Endpoints serverless
├── src/
│   ├── components/      # Componentes React
│   ├── hooks/          # Hooks personalizados
│   └── lib/            # Utilidades (Supabase)
├── start-dev.bat       # Script de inicio
└── vercel.json         # Configuración Vercel
```
