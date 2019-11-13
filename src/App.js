import React from 'react';
import './css/osahan.css';
import './App.css';
import './vendor/bootstrap/css/bootstrap.min.css';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
