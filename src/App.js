import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const INICIAL_STATE = {
  cardName: '',
  cardDescription: '',
  cardAttr1: 0,
  cardAttr2: 0,
  cardAttr3: 0,
  cardImage: '',
  cardRare: '',
  cardTrunfo: true,
  hasTrunfo: false,
  isSaveButtonDisabled: false,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = INICIAL_STATE;
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: stateValue,
    });
  };

  onSaveButtonClick = () => {};

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
