import { useEffect, useRef } from 'react'

export const useKeepAlive = (intervalMinutes = 5) => {
  const intervalRef = useRef(null)

  useEffect(() => {
    const keepWarm = async () => {
      try {
        // Ping a los endpoints de keep-alive
        await Promise.all([
          fetch('/api/keep-warm', { 
            method: 'GET',
            cache: 'no-store',
            headers: { 'Cache-Control': 'no-cache' }
          }),
          fetch('/api/ping', { 
            method: 'GET',
            cache: 'no-store',
            headers: { 'Cache-Control': 'no-cache' }
          })
        ])
        console.log('Keep-alive ping sent successfully')
      } catch (error) {
        console.log('Keep-alive ping failed:', error.message)
      }
    }

    // Primer ping inmediato
    keepWarm()

    // Pings periódicos
    intervalRef.current = setInterval(keepWarm, intervalMinutes * 60 * 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [intervalMinutes])

  return null
}
