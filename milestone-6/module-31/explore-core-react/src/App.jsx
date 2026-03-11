import './App.css'

function App() {

  return (
    <>
      <h1>React Core Concepts</h1>
      <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Sakib" tech="Next.js"></Developer>
      <Developer name="Ahmed" tech="AWS"></Developer>
      <Developer name="Sadhin" tech="Vue.js"></Developer>
    </>
  )
}

function Person() {
  const age = 26;
  const name = 'Samad';

  //variable for custom styling inline
  const personStyle = {
    color: "tomato",
    textAlign: "right"
  }

  return (
    // custom styling inline
    <h2 style={personStyle}>I {name}, my {age} years old!</h2>
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

function fruits() {

  return (
   <div>
    <h3>Foler naam:</h3>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
        <li>Bish</li>
      </ul>
   </div>
  )
}

function Student() {

  return (
    <div className='student'>
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  )
}

function Developer(props) {
  
  return (
    <div style={{
      // full inline styling uses double curly braces
      border: '2px solid green',
      borderRadius: '20px',
      marginBottom: '10px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

export default App
