import { StrictMode } from 'react'
import { render } from 'react-dom'
import './index.scss'
import './theme/theme.scss'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
)
