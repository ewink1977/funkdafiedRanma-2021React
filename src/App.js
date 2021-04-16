import './styles/funk.scss'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Seperator from './components/Seperator'

function App() {
  return (
    <div className='wrapper'>
      <div className='display'>
        <Navigation />
        <div className='content'>
          <Header />
          <Seperator />
        </div>
      </div>
    </div>
  );
}

export default App;
