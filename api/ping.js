// Endpoint ligero para pings externos
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
  res.setHeader('Access-Control-Allow-Origin', '*')
  
  if (req.method === 'GET') {
    res.status(200).json({
      status: 'pong',
      timestamp: new Date().toISOString(),
      method: 'GET'
    })
  } else if (req.method === 'POST') {
    res.status(200).json({
      status: 'pong',
      timestamp: new Date().toISOString(),
      method: 'POST'
    })
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).json({ error: 'Method not allowed' })
  }
}
