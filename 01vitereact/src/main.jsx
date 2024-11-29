import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from'react-dom'

import App from './App.jsx'

function MyApp() {
 

  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// const reactElement = React.createElement(
//    'a',
//    {href:'https://google.com',target:'_blank'},
//    'Click me '
//  )

 createRoot(document.getElementById('root')).render(
   <StrictMode>
    <MyApp />
    <App />
    
  </StrictMode>,
 )
//  ReactDOM.createRoot(document.getElementById('root')).render(
  
//    reactElement
    
  
//  )
