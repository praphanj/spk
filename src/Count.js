import React, {useState} from 'react';
import './App.css';

function Count(){
    const [count, setCount] = useState(0);
    const handleSelect = (e)=>{
        setCount(count+1);
    }
    return (
        <div className="App">
            <h1>Count : {count}</h1>
            <hr/>
            <button onClick={handleSelect}>Add</button>
        </div>
    )
}
export default Count;