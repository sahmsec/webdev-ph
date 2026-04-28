import './App.css'

export default function Singer({singer}) {

    return (
        <div className='student'>
            <h2>Singer name: {singer.name}</h2>
            <h2>Age: {singer.Age}</h2>
        </div>
    )
}