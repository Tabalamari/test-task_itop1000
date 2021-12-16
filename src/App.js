import './App.css';
import { useState, useEffect } from 'react';
import { interval } from 'rxjs';


function App() {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState("stopped");

    let waiting = 0;

    useEffect(() => {

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
        debugger;
        if (waiting !== 0) {
            const currentDate = Date.now();
            if (currentDate - waiting <= 300) {
                waiting = 0;
                setStatus("stopped");
            }
        } else {waiting = Date.now();}
        

    }
    function resetTimer() {

        setSeconds(0);

    }
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
