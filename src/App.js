import React from 'react';
import Form from './components/Form';
import data from './data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: data,
    };
  }

  addNewCard = (card) => {
    this.setState((prevState) => ({
      cards: [card, ...prevState.cards],
    }));
  }

  render() {
    // const { cards } = this.state;

    return (
      <div>
        <h1>Os Simpsons Trunfo</h1>
        <Form addNewCard={ this.addNewCard } />
      </div>
    );
  }
}

export default App;
