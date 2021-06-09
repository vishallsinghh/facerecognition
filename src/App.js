import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo'
import 'tachyons';
import Image from './components/Image';
import Rank from './components/Rank';
import Particles from 'react-particles-js';

const particleOptions = {
  particles:{
    number:{
      value:70,
       density:{
        enable:true,
        value_area: 700 
      }
    }
  }
  }

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions} />
      <Navigation />
      <Logo />
      <Image />
      <Rank />
    </div>
  );
}

export default App;
