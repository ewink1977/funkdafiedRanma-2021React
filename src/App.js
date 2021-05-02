import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/funk.scss';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Privacy from './components/MiscComps/Privacy';
import TenMinutes from './components/MiscComps/TenMinutes';
import Ewink from './components/MiscComps/Ewink';
import Ailurophobia from './components/MiscComps/Ailurophobia';
import Information from './components/MiscComps/Information';
import FunkdafiedImageGallery from './components/MiscComps/FunkdafiedImageGallery';
import FanFiction from './components/MiscComps/FanFiction';
import RanmaMeetsSailorMoon from './components/MiscComps/RanmaMeetsSailorMoon';
import Music from './components/MiscComps/Music';
import EngagementChart from './components/MiscComps/EngagementChart';
import KimCounterpoint from './components/MiscComps/KimCounterpoint';
import Characters from './components/Characters';
import RanmaBoyType from './components/CharComps/RanmaBoyType';
import RanmaGirlType from './components/CharComps/RanmaGirlType';
import Akane from './components/CharComps/Akane';
import Genma from './components/CharComps/Genma';
import Soun from './components/CharComps/Soun';
import Ryouga from './components/CharComps/Ryouga';
import Shampoo from './components/CharComps/Shampoo';
import Tatewaki from './components/CharComps/Tatewaki';
import Nabiki from './components/CharComps/Nabiki';
import Kasumi from './components/CharComps/Kasumi';
import Happosai from './components/CharComps/Happosai';
import Cologne from './components/CharComps/Cologne';
import Kodachi from './components/CharComps/Kodachi';
import Ukyou from './components/CharComps/Ukyou';
import MiscCharacters from './components/CharComps/MiscCharacters';

function App() {
  return (
    <Router>
      <div className='wrapper'>
        <div className='display'>
          <Navigation />
          <div className='content'>
            <Header />
              <Switch>
                <Route exact path='/' component={ Homepage } />
                <Route path='/ewink/' component={ Ewink } />
                <Route path='/privacy/' component={ Privacy } />
                <Route path='/10minutes/' component={ TenMinutes } />
                <Route path='/ailurophobia/' component={ Ailurophobia } />
                <Route path='/information/' component={ Information } />
                <Route path='/imagegal/' component={ FunkdafiedImageGallery } />
                <Route exact path='/fanfics/' component={ FanFiction } />
                <Route path='/fanfics/rmsm/' component={ RanmaMeetsSailorMoon } />
                <Route path='/music/' component={ Music } />
                <Route exact path='/engagementchart/' component={ EngagementChart } />
                <Route path='/engagementchart/kim-counterpoint/' component={ KimCounterpoint } />
                <Route exact path='/characters/' component={ Characters } />
                <Route path='/characters/ranma-boy/' component={ RanmaBoyType } />
                <Route path='/characters/ranma-girl/' component={ RanmaGirlType } />
                <Route path='/characters/akane/' component={ Akane } />
                <Route path='/characters/genma/' component={ Genma } />
                <Route path='/characters/soun/' component={ Soun } />
                <Route path='/characters/ryouga/' component={ Ryouga } />
                <Route path='/characters/shampoo/' component={ Shampoo } />
                <Route path='/characters/kuno/' component={ Tatewaki } />
                <Route path='/characters/nabiki/' component={ Nabiki } />
                <Route path='/characters/kasumi/' component={ Kasumi } />
                <Route path='/characters/happosai/' component={ Happosai } />
                <Route path='/characters/cologne/' component={ Cologne } />
                <Route path='/characters/kodachi/' component={ Kodachi } />
                <Route path='/characters/ukyou/' component={ Ukyou } />
                <Route path='/characters/misc/' component={ MiscCharacters } />
              </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
