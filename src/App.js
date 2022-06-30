import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = { cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    };
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
    } = this.state;

    const handleChange = (event) => {
      const { name, type } = event.target;
      const value = type === 'checkbox' ? event.target.checked : event.target.value;
      this.setState({
        [name]: value,
      });
    };

    const disableButton = () => {
      if (cardName.length > 0
  && cardDescription.length > 0
  && cardAttr1.length > 0
  && cardAttr2.length > 0
  && cardAttr3.length > 0
  && cardImage.length > 0) {
        return false;
      }
      return true;
    };

    return (
      <div>
        <h1>Tryunfo!!!</h1>
        <Form
          onInputChange={ handleChange }
          isSaveButtonDisabled={ disableButton() }
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
