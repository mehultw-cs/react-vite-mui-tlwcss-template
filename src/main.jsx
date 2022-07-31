import React from 'react'
import ReactDOM from 'react-dom'
import './static/css/index.css'
import App from './App'


//import MaterialUI
import { StyledEngineProvider } from '@mui/material';  


ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
       <App />
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
