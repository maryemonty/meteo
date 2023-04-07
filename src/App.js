import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSun } from "react-icons/fa";
import './App.css';
import Cities from './components/Cities';
import CitiesDefault from './components/CitiesDefault';

function App() {
  return (
    <div className="p-5 bg-gradient App text-center">
      <Container>
        <CitiesDefault />
        <Cities />
      </Container>
    </div>
  );
}

export default App;
