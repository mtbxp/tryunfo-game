import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      custonCards: [],
    };
  }

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const max = 90;
    const min = 0;
    const totalMax = 210;
    const attr1 = parseInt(cardAttr1, 10);
    const attr2 = parseInt(cardAttr2, 10);
    const attr3 = parseInt(cardAttr3, 10);
    let result;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') {
      result = true;
    } else if (attr1 > max || attr2 > max || attr3 > max) {
      result = true;
    } else if (attr1 < min || attr2 < min || attr3 < min) {
      result = true;
    } else if (attr1 + attr2 + attr3 > totalMax) {
      result = true;
    } else {
      result = false;
    }
    this.setState({
      isSaveButtonDisabled: result,
    });
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.isSaveButtonDisabled();
    });
  }

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState((prevState) => ({
      custonCards: [{
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }, ...prevState.custonCards,
      ],
    }));
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  render() {
    return (
      <div>
        <h1>Valorant Super Trunfo</h1>
        <div className="main-Content">
          <fieldset className="form-section">
            <legend>Form</legend>
            <Form
              { ...this.state }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </fieldset>
          <fieldset className="card-section">
            <legend>Card</legend>
            <Card { ...this.state } />
          </fieldset>
        </div>

      </div>
    );
  }
}

export default App;
