import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";

function App() {

    const [inc, setInk] = useState<number>(0)

    const incAdd = () =>{
        setInk(inc+1)
    }

    const incReset = () =>{
        setInk(0)
    }

    return (
        <div className="App">
            <div className='appWrapper'>
                <Display value={inc}/>
                <div className='appButtonBox'>
                    <Button
                        name='inc'
                        callback={incAdd}
                        disabled={inc >= 5}/>
                    <Button
                        name='reset'
                        callback={incReset}
                        disabled={inc === 0}/>
                </div>
            </div>
        </div>
    );
}

export default App;
