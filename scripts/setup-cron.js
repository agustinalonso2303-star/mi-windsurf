// Script para configurar cron jobs externos (opcional)
// Este script genera URLs para servicios de cron externos

const APP_URL = process.env.VERCEL_URL || 'https://your-app.vercel.app'

const endpoints = [
  `${APP_URL}/api/keep-warm`,
  `${APP_URL}/api/ping`
]

console.log('=== CRON JOB SETUP ===')
console.log('Para mantener tu app activa, configura estos endpoints en un servicio de cron:')
console.log('')

endpoints.forEach((endpoint, index) => {
  console.log(`Endpoint ${index + 1}: ${endpoint}`)
  console.log(`Cron schedule: */5 * * * * (cada 5 minutos)`)
  console.log(`Method: GET`)
  console.log('')
})

console.log('Servicios recomendados:')
console.log('- cron-job.org (gratis)')
console.log('- EasyCron (gratis)')
console.log('- GitHub Actions (con workflow)')
console.log('- UptimeRobot (monitoreo + keep-alive)')
console.log('')

// GitHub Actions workflow example
console.log('=== GITHUB ACTIONS WORKFLOW ===')
console.log(`
name: Keep App Alive
on:
  schedule:
    - cron: '*/5 * * * *'  # Cada 5 minutos
  workflow_dispatch:

jobs:
  keep-warm:
    runs-on: ubuntu-latest
    steps:
      - name: Ping endpoints
        run: |
          curl -X GET "${endpoints[0]}"
          curl -X GET "${endpoints[1]}"
`)
