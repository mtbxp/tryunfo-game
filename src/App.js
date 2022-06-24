import React from 'react';
import Card from './Card';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Valorant Super Trunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
