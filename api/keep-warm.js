// Vercel Serverless Function para mantener la aplicación activa
export default function handler(req, res) {
  // Función simple que responde rápidamente para mantener el servidor caliente
  const timestamp = new Date().toISOString()
  
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }
  
  res.status(200).json({
    status: 'warm',
    timestamp,
    message: 'Application is awake and ready',
    uptime: process.uptime()
  })
}
