import { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Shipment from './components/shipment/Shipment';

export const Count2 = createContext() 
function App() {
  const [count,setCount] =useState(0)
  return (
    <Count2.Provider value ={[count,setCount]} >
      <Header></Header>
      <Home count={count} />
      <Shipment/>
    </Count2.Provider>
  );
}

export default App;
