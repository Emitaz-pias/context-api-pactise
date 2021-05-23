import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

function App() {
  const [count,setCount] =useState(0)
  return (
    <div className="App">
      <Header count={count} setCount={setCount}></Header>
      <Home count={count} />
      <Shipment/>
    </div>
  );
}

export default App;
