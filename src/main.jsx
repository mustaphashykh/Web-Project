import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MyStateContextProvider } from './Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyStateContextProvider>
    <App />
  </MyStateContextProvider>
)
