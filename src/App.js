import './App.css';
import { useState, useEffect } from 'react';
import { interval } from 'rxjs';


function App() {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState("stopped");


    useEffect(
        () => {

            const subscription = interval(1000).subscribe(() => {
                if (status === "started") {
                    setSeconds(seconds + 1000)
                }
            });

            return () => {
                subscription.unsubscribe();
            }

        }
    );

    function stopTimer() {
        setStatus("stopped");
        setSeconds(0);
    }
    function startTimer() {
        setStatus("started");
    }
    function waitTimer() {
        setStatus("stopped");
    }
    function resetTimer() {
        setSeconds(0);
    }
    console.log(status, 1)
    return (
        <div className="App">
            <header className="App-header">
                <span>{new Date(seconds).toISOString().slice(11, 19)}</span>
                <button onClick={startTimer}>start</button>
                <button onClick={stopTimer}>stop</button>
                <button onClick={waitTimer}>wait</button>
                <button onClick={resetTimer}>reset</button>
            </header>
        </div>
    );
}


export default App;
