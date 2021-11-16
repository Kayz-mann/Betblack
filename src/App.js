import './App.css';
import Burger from './components/Nav/Burger'
import { Router } from 'react-router';
import Platform from './components/Platform';
import Roadmap  from './components/Roadmap';
import Games from './components/Games';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      <div className="background-image">
       <Burger />
       <Platform />
       </div>
       <div className="roadmapbg">
         <Roadmap />
       </div>
       <div className="gamesbg">
         <Games />
        </div>
        <div className="contactbg">
            <Contact />
        </div>
        <Footer />
       {/* </Router> */}
    </div>
  );
}

export default App;
