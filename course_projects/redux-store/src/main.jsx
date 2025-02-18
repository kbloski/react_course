import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Użycie providera do stosowania magazynu
import { Provider } from 'react-redux'
import store from './store/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Użycie provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
