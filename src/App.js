import React from 'react';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Tryunfo Pokemon</h1>
        <Form />
        <Card
          cardName="Charmander"
          cardImage="./Eu.jpg"
          cardDescription="A Fire Pokemon"
          cardAttr1="5000"
          cardAttr2="4000"
          cardAttr3="3000"
          cardAttr4="2000"
          cardRare="normal"
          cardTrunfo
        />
      </div>
    );
  }
}

export default App;
