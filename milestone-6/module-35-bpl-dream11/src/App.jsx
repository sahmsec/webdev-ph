import './App.css'
import { Suspense } from 'react';
import Navbar from './components/navbar/Navbar'
import Banner from './components/homepage/Banner'
import Players from './components/homepage/Players';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
}

function App() {
  const playersPromise = fetchPlayer();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-md"></span>}>
        <Players playersPromise={playersPromise} />
      </Suspense>
    </>
  )
}

export default App
