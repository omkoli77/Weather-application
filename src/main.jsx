import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home'
import { WeatherContextProvider } from './WeatherContextProvider'

createRoot(document.getElementById('root')).render(
  <WeatherContextProvider>
    <Home/>
  </WeatherContextProvider>
)
