import './App.css';
import { useState, useEffect } from 'react';
import { interval } from 'rxjs';


function App() {
    const [seconds, setSeconds] = useState(0);
    const [status, setStatus] = useState("start")


    useEffect(() => {
        interval(1000).subscribe(() => {
            setSeconds(val => val + 1000)
        });

    }, [status]);

    return (
        <div className="App">
            <header className="App-header">
                <span>{new Date(seconds).toISOString().slice(11, 19)}</span>
            </header>
        </div>
    );
}


export default App;
