import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [time,setTime]=useState(25)
  useEffect(() => {
    setTimeout(() => {
      if(time>0){
        setTime(time-1)
      }
    }, 1000)
  }, [time])
  return (
    <div className={`main-div ${time<21&&time>10?'black':(time>5&&time<11?'yellow':'white')}`}>
      <h1 className='text-blue'>{time}</h1>
    </div>
  );
}

export default App;
