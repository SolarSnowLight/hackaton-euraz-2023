import React from 'react'
import ReactDOM from 'react-dom/client'
import 'src/style/index.css'
import 'src/style/fonts.css'
import 'src/style/reset.css'
import App from 'src/pages/App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
