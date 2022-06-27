import React from 'react';
import Card from './components/Card';
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
    const { cards } = this.state;

    return (
      <div>
        <h1>Os Simpsons Trunfo</h1>
        <Form addNewCard={ this.addNewCard } />
        <div className="cards">
          <Card cards={ cards } />
        </div>
      </div>
    );
  }
}

export default App;
