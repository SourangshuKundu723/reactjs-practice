import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//Custom React Element
const reactElement = React.createElement(
  'a', 
  {href: 'https://www.google.com', target: '_blank'},
  'visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)