import Batsman from './Batsman';
import './App.css'
import Counter from './Counter';
import Users from './Users';
import { Suspense } from 'react';
import Friends from './Friends';
import Posts from './Posts'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const fetchFriends = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}



function App() {

  const postPromise = fetchPosts();

  const friendsPromise = fetchFriends();

  function handleClick() {
    alert('I am clicked!');
  }

  const handleClick4 = () => alert('I am clicked 4!')

  const handleAdd5 = num => {
    const newNumber = num + 5;
    alert(newNumber);
  }


  return (
    <>
      <h3>React Core Part 2</h3>

      <Suspense fallback={<h3>Loading posts ...</h3>}>
        <Posts postPromise={postPromise}></Posts>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>click me 1</button>
      <button onClick={handleClick4}>click me 4</button>

      <button onClick={() => alert('I am clicked 3!')}>click me 3</button>

      <button onClick={function handleClick2() {
        alert('I am clicked2!');
      }}>Click me 2</button>

      <button onClick={() => handleAdd5(7)}>Add 5</button>

    </>
  )
}

export default App
