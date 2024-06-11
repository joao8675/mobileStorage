import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="header" id='home'>
        <div className='headerH1'>
          <h1>Explore the<br/>Future<br />with Edge<br/>Technology.</h1>
        </div>
      </header>
      <div className="content">
        <h2>STORE</h2>
        <p>Your One-Stop Shop</p>
      </div>
    </div>
  );
};

export default App;