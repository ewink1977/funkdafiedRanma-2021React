import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/funk.scss'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Privacy from './components/Privacy';
import Characters from './components/Characters';
import RanmaBoyType from './components/CharComps/RanmaBoyType';
import RanmaGirlType from './components/CharComps/RanmaGirlType';
import Akane from './components/CharComps/Akane';

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
                <Route path='/privacy/' component={ Privacy } />
                <Route exact path='/characters/' component={ Characters } />
                <Route path='/characters/ranma-boy/' component={ RanmaBoyType } />
                <Route path='/characters/ranma-girl/' component={ RanmaGirlType } />
                <Route path='/characters/akane/' component={ Akane } />
              </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
