import './App.css';
import ToDo, { Important } from './Todo';
import HungryNaki from './Hungry';
import Actor from './Actor';
import Singer from './Singer';

function App() {

  const actors = ['Tom Cruise', 'Shah Rukh Khan', 'Vin Diesel'];

  const singers = [
    {
      id: 1,
      name: "Tahsan",
      Age: "45",
    },
    {
      id: 3,
      name: "Dr. Mahfuz",
      Age: "68",
    },
    {
      id: 2,
      name: "Bijoy",
      Age: "55",
    }
  ]

  return (


    <>
      <h1>React Core Concepts</h1>
      {/* <Person></Person>
      <Sports></Sports>
      <Student></Student>
      <Developer name="Sakib" tech="Next.js"></Developer>
      <Developer name="Ahmed" tech="AWS"></Developer>
      <Developer name="Sadhin" tech="Vue.js"></Developer>
      <Player name="Tamim" runs="5000"></Player>
      <Player name="Shakib" runs="6000"></Player>
      <Salami occassion="Roja Eid" amount="4000"></Salami>
      <Salami occassion="Dropout" amount="10000"></Salami>

      <ToDo task="Learn React" isDone="true"></ToDo>
      <ToDo task="Taking shower" isDone="false"></ToDo>
      <HungryNaki isHungry="true" food="Kebab & Luchi" restaurant="Kebab Express"></HungryNaki>
      <HungryNaki isHungry="false" food="Choco hot coffee" restaurant="Coffeelime"></HungryNaki>
      <Important name="Sakib Ahmed" isdone="true" time="12:11"></Important> */}

      {actors.map(actor => <Actor actorName={actor}></Actor>)}

      {singers.map(singer => <Singer key={singer.id} singer={singer} ></Singer>)}

    </>
  )
}





function Salami({ occassion, amount }) {

  return (
    <div className="student">
      <h3>Salami for: {occassion}</h3>
      <h3>Amount: {amount}</h3>
    </div>
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

function Player({ name, runs }) {
  return (
    <div className='student'>
      <h3>Name: {name}</h3>
      <h3>Runs: {runs}</h3>
    </div>
  )
}

export default App
