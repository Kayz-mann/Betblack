
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import CareerScreen from './Screens/CareerScreen';
import HomeScreen from './Screens/HomeScreen'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen/>} />
        <Route exact path="careers" element={<CareerScreen/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
