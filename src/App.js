import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Main title="TV Shows"/>
    </div>
  );
}

export default App;
