import { useState } from 'react';
import './App.css';
import SkylineDropdown from './Form/SkylineDropdown';
import WaterfrontDropdown from './Form/WaterfrontDropdown';
import CastleDropdown from './Form/CastleDropdown';
import SloganList from './Form/SloganList';
import SloganForm from './Form/SloganForm';
import CityNameInput from './Form/CityNameInput';
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
      <div className='bottom'>
        
        <CityNameInput setCityName={setCityName}/>
        <section className='dropdowns'>
          
          <WaterfrontDropdown setWaterfrontId={setWaterfrontId}/>
          <SkylineDropdown setSkylineId={setSkylineId} />
          <CastleDropdown setCastleId={setCastleId} />
        </section>
       
        <SloganForm setSlogans={setSlogans} slogans={slogans} />
       
        <SloganList slogans={slogans} />

      </div>
    </div>
  );
}

export default App;
