import { useState } from 'react';
import './App.css';
import Display from './Display/Display';
import Form from './Form/Form';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  // you'll need to track a city name, which starts as the city name of your choice.
  const [cityName, setCityName] = useState('Portland');
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for  example
  const [slogans, setSlogans] = useState(['The City of Excellence']);


  return (
    <div className="App">
      
      <Display skylineId={skylineId} waterfrontId={waterfrontId} castleId={castleId} />
      <h1>
    
        Welcome to beautiful {cityName}!
      </h1>
      <div className="bottom">
        
        <Form setSkylineId={setSkylineId} setWaterfrontId={setWaterfrontId} setCastleId={setCastleId} setCityName={setCityName} slogans={slogans} setSlogans={setSlogans} />

      </div>
    </div>
  );
}

export default App;
