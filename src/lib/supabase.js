import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Optimized Supabase client with connection pooling
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  },
  db: {
    schema: 'public'
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  },
  global: {
    headers: {
      'Cache-Control': 'no-cache'
    }
  }
})

// Connection keep-alive function to prevent cold starts
export const keepWarm = async () => {
  try {
    await supabase.from('_health_check').select('count').limit(1)
  } catch (error) {
    // Ignore health check errors
  }
}
