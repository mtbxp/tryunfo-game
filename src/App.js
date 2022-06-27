import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const INNITIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: false,
  // hasTrunfo,
};

class App extends React.Component {
  constructor() {
    super();

    this.state = INNITIAL_STATE;
  }

  handleChange = ({ target }) => {
    const value = target.type
    === 'checkbox' ? target.checked : target.value;

    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardProps = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } { ...this.state } />
        <Card onInputChange={ this.handleChange } { ...cardProps } />
      </div>
    );
  }
}

export default App;
