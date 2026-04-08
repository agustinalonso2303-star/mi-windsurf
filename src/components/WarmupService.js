import { useEffect, useRef } from 'react'
import { keepWarm } from '../lib/supabase'

export const useWarmupService = () => {
  const intervalRef = useRef(null)

  useEffect(() => {
    // Initial warmup
    keepWarm()

    // Keep connections warm every 5 minutes
    intervalRef.current = setInterval(() => {
      keepWarm()
    }, 5 * 60 * 1000)

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return null
}

// Preload critical resources
export const preloadResources = () => {
  // Preload Supabase connection
  keepWarm()
  
  // Preload critical images and fonts
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      // Add any critical resource preloading here
    })
  }
}
