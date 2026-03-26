import { useState } from 'react'
import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <section id="">

        <DaisyNav></DaisyNav>
        <Navbar></Navbar>
      </section>

    </>
  )
}

export default App
