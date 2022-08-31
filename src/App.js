import React from 'react';
import './App.css';
import { BarChart } from './components/BarChart';
import { Scatter } from './components/Scatter';

function App() {

  return (
    <div className="App">
      <h2>Bar Chart</h2>
      <BarChart />
      <h2>Scatter Chart</h2>
      <Scatter />
      
    </div>
  );
}

export default App;