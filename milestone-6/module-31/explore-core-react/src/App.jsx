import './App.css'



function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Sports></Sports>
    </>
  )
}

function Person() {
  const age = 26;
  const name = 'Samad';
  return (
    <h2>I {name}, my {age} years old!</h2>
  )
}

function Sports() {

  return (
    <div>
      <h2>Cricket</h2>
      <p>Playing and losing</p>
    </div>
  )
}

export default App
