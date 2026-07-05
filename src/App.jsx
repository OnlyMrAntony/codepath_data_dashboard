import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(null)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  useEffect(() => {
    async function fetchWeatherData() {
      setLoading(true)
      setError(null)


      
    } 


  }, [])  

  return (
    <>
  
    </>
  )
}

export default App
