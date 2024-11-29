import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-red-700 text-white p-4 rounded-xl mb-4'>Tailwind Test</h1>
     <Card username="Hinza" btnText = "Click Me"/>
     <Card username="Amna" />
    </>
  )
}

export default App
