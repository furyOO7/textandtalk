import './App.css';
import {countryCode} from './constant/countrycode'
import LandingComponent from './Component/LandingComponent/Landingcomponent';

function App() {
  return (
    <div className="App">
      <div className='mt-4'>
        <img src="logoimage.png" alt="Text&tTalk logo" style={{width: '100%'}}/>
      </div>
      <LandingComponent countryCode={countryCode}/>
    </div>  
  );
}

export default App;
