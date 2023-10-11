import Clubmembers from './Components/Clubmembers';
import ClubRequest from './Components/ClubRequest';
import Clubmanager from './Components/Clubmanager';
import SpecialBenefits from './Components/SpecialBenefits';
import Mybidslist from './Components/Mybidslist';
import Report from './Components/Report';
import Tradehistory from './Components/Tradehistory';
import Clubsetting from './Components/Clubsetting';
import Editclub from './Components/Editclub';
import SelectCountry from './Components/SelectCountry';
import Benefits from './Components/Benefits';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addowners from './Components/Addowners';
import Cluballnfb from './Components/Cluballnfb';

function App() {
  return (
    <div className="App">
      {/* <Clubmembers />  */}
      {/* <ClubRequest /> */}
     
      {/* <Router>
        <Routes>
          <Route path="/" element={<Clubmanager />} />
           <Route path="/addowners" element={<Addowners />} />
          <Clubmanager />
          </Routes>
      </Router> */}

      
      {/* <SpecialBenefits /> */}
      {/* <Mybidslist /> */}
      {/* <Report /> */}
      {/* <Tradehistory /> */}
      {/* <Clubsetting /> */}
      {/* <Editclub /> */}
      {/* <SelectCountry /> */}
      {/* <Benefits /> */}
      <Cluballnfb />
    </div>
  );
}

export default App;
