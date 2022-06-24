import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: data,
    };
  }

  addNewCard = (card) => {
    this.setState({
      card: [...this.state.card, card],
    });
  }
  render() {
    const { card } = this.state;

    return (
      <div>
        <h1>Tryunfo!</h1>
        <Form onInputChange={this.addNewCard} />
        <Card />
      </div>
    );
  }
}

export default App;
