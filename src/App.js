import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
  }

  addCards = (carta) => {
    this.setState((cartas) => ({
      cards: [...cartas.cards, carta],
    }));
  }

  render() {
    const { cards } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form addCards={ this.addCards } />
        <Card cards={ cards } />
      </div>
    );
  }
}

export default App;
