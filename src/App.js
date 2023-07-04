import React from 'react';
import './App.css';
import Weather from './components/Weather';
import Footer from './components/Footer';

function App() {
  return (
    <div >
    <div className="App">
      <Weather />
    </div>
    <Footer />
    </div>

  );
}

export default App;
