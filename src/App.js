import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: '',
      description: '',
      valueCard1: '0',
      valueCard2: '0',
      valueCard3: '0',
      urlImage: '',
      rare: '',
      superTrunfo: false,
      isSaveButtonDisabled: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const valueState = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: valueState,
    });
  }

  render() {
    const { card, description, valueCard1, valueCard2, valueCard3, urlImage,
      rare, superTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ card }
          cardDescription={ description }
          cardAttr1={ valueCard1 }
          cardAttr2={ valueCard2 }
          cardAttr3={ valueCard3 }
          cardImage={ urlImage }
          cardRare={ rare }
          cardTrunfo={ superTrunfo }
          hasTrunfo={ false }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ card }
          cardDescription={ description }
          cardAttr1={ valueCard1 }
          cardAttr2={ valueCard2 }
          cardAttr3={ valueCard3 }
          cardImage={ urlImage }
          cardRare={ rare }
          cardTrunfo={ superTrunfo }
        />
      </div>
    );
  }
}

export default App;
