import { createRoot } from 'react-dom/client'
// The font is bundled with the site (regular and bold) instead of loading from Google.
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
