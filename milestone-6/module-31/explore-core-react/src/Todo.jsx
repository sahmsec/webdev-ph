import './App.css'

export default function ToDo({ task, isDone }) {
    let result = "Complete";

    if (isDone) {
        result = result;
    }
    else result = "Incomplete";

    return (
        <div className='student'>
            <h3>Task: {task}</h3>
            <h3>State: {result}</h3>
        </div>
    )
}