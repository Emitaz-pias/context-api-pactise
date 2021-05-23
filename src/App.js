import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Shipment/>
    </div>
  );
}

export default App;
