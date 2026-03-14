import { useState } from "react"

export default function Batsman() {
    let [runs, setRuns] = useState(0);
    let [sixes, setSixes]= useState(0);

    const scoreSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }
    const scoreFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }
    const scoreSix = () => {
        const updateRuns = runs + 6;
        const updateSixes = sixes + 1;
        setSixes(updateSixes);
        setRuns(updateRuns);
    }

    return (
        <div className="custom">
            <h2>Scoreboard:</h2>
            {runs >= 50 && <p>Congratulations you score half century!!!</p>}
            <h3>Batsman: Shakib</h3>
            <h3>Runs: {runs}</h3>
            <p><small>Number of sixes: {sixes}</small></p>
            <button onClick={scoreSingle}>+1</button>
            <button onClick={scoreFour}>+4</button>
            <button onClick={scoreSix}>+6</button>
        </div>
    )
}