import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react';
import { Container } from 'react-bootstrap';
import { FaSun } from "react-icons/fa";
import './App.css';
import Cities from './components/Cities';

function App() {
  return (
    <div className="p-5 bg-primary bg-gradient App text-center">
      <Container>
        <Cities />
      </Container>
    </div>
  );
}

export default App;
