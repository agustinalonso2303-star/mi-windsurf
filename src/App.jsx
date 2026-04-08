import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useWarmupService, preloadResources } from './components/WarmupService'
import { useKeepAlive } from './hooks/useKeepAlive'
import './App.css'

function App() {
  // Initialize warmup service to prevent cold starts
  useWarmupService()
  
  // Keep the app alive to prevent Vercel sleep
  useKeepAlive(3) // Ping cada 3 minutos

  useEffect(() => {
    // Preload critical resources on app load
    preloadResources()
  }, [])

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Optimized Supabase + Vercel App</h1>
          <p>Configured to minimize cold starts and improve performance</p>
        </header>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <main className="container">
      <h2>Welcome to your optimized app</h2>
      <p>This app is configured with several optimizations to reduce Vercel cold starts:</p>
      <ul>
        <li>Connection keep-alive for Supabase</li>
        <li>Optimized build configuration</li>
        <li>Strategic caching headers</li>
        <li>Resource preloading</li>
      </ul>
    </main>
  )
}

function About() {
  return (
    <main className="container">
      <h2>Performance Optimizations</h2>
      <p>This implementation includes:</p>
      <ul>
        <li><strong>Vercel Functions Optimization:</strong> Increased memory and optimized runtime</li>
        <li><strong>Supabase Connection Pooling:</strong> Persistent connections to reduce latency</li>
        <li><strong>Warmup Service:</strong> Prevents cold starts with periodic health checks</li>
        <li><strong>Build Optimization:</strong> Code splitting and minification for faster loads</li>
      </ul>
    </main>
  )
}

export default App
