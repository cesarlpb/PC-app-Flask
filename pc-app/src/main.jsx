import React from 'react'
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from "react-router-dom";
import App from './App'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
)
