import './App.css'

export default function ToDo({ task, isDone }) {
    let result;

    if (isDone) {
        result = "Complete";
    }
    else result = "Incomplete";

    return (
        <div className='student'>
            <h3>Task: {task}</h3>
            <h3>State: {result}</h3>
        </div>
    )
}

// using ternary
export function Important({ name, isDone, time }) {
    return isDone ?
        <h2>{name} You are promoted, Cheers!!</h2>
        : <h2>{name} You are fired you piece of dunk!!</h2>
}

// && for one condition
export function Important2({ name, isDone }) {
    return isDone &&
        <h2>You have done a great job {name}</h2>
}

// Shows the else reply
export function Important3({ name, isDone }) {
    return isDone ||
        <h2>You are no help {name}</h2>
}