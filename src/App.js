import './App.css';
import { useState, useEffect } from 'react';
import { interval } from 'rxjs';


function App() {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState("stopped");


    useEffect(() => {
        interval(1000)
        .subscribe(() => {
            if (status === "started") {
                console.log(status)
                setSeconds(val => val + 1000)
            }
            
        });

    }, [status]);


    function stopTimer(){
        setStatus("stopped");
    }
    function startTimer(){
        setStatus("started");
    }
console.log(status, 1)
    return (
        <div className="App">
            <header className="App-header">
                <span>{new Date(seconds).toISOString().slice(11, 19)}</span>
                <button onClick={startTimer}>start</button>
                <button onClick={stopTimer}>stop</button>
            </header>
        </div>
    );
}


export default App;
