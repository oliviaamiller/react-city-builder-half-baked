import '../App.css';
import CityNameInput from './CityNameInput';
import WaterfrontDropdown from './WaterfrontDropdown';
import SkylineDropdown from './SkylineDropdown';
import CastleDropdown from './CastleDropdown';
import SloganForm from './SloganForm';
import SloganList from './SloganList';

export default function Form({ setCityName, 
  setWaterfrontId, 
  setSkylineId, 
  setCastleId, 
  setSlogans, 
  slogans }) 
  
{ 
  return <div className='bottom'>
    <CityNameInput setCityName={setCityName}/>
    <section className='dropdowns'>
          
      <WaterfrontDropdown setWaterfrontId={setWaterfrontId}/>
      <SkylineDropdown setSkylineId={setSkylineId} />
      <CastleDropdown setCastleId={setCastleId} />
    </section>
       
    <SloganForm setSlogans={setSlogans} slogans={slogans} />
       
    <SloganList slogans={slogans} />
  </div>;
}
