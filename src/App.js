import './App.css';
import {countryCode} from './constant/countrycode'
import LandingComponent from './Component/LandingComponent/Landingcomponent';

function App() {
  return (
    <div className="App">
      <div className="main-container">
      <LandingComponent countryCode={countryCode}/>
      </div>
    </div>  
  );
}

export default App;
