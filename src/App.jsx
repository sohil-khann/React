import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
//https://api.github.com/users/sohil-khann

function App() {
  const [count, setCount] = useState(0)
  

  return (
   <div>
    <Navbar/>
    <Search/>
   </div>
  )
}

export default App
