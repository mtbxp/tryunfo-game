import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <>
        <Form />
        <Card
          cardName="oi"
          cardDescription="oi"
          cardAttr1="oi"
          cardAttr2="oi"
          cardAttr3="oi"
          cardImage="oi"
          cardRare="oi"
          cardTrunfo="true"
        />
      </>
    );
  }
}

export default App;
