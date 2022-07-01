import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validateBtn = this.validateBtn.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      // listCard: [],
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateBtn());
  }

  onSaveButtonClick() {
    console.log('entrou');
  }

  validateBtn() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const charactersInfo = cardName !== '' && cardDescription !== ''
      && cardImage !== '' && cardRare !== '';

    const maxSumValueAttr = 210;

    const sumAttrs = Number(cardAttr1) + Number(cardAttr2)
    + Number(cardAttr3) <= maxSumValueAttr;

    const maxValueAttr = 90;

    const minValueAttr = 0;

    const valueMaxAttrs = Number(cardAttr1) <= maxValueAttr
      && Number(cardAttr2) <= maxValueAttr
      && Number(cardAttr3) <= maxValueAttr;

    const valueMinAttrs = Number(cardAttr1) >= minValueAttr
      && Number(cardAttr2) >= minValueAttr
      && Number(cardAttr3) >= minValueAttr;

    this.setState({
      isSaveButtonDisabled: !(charactersInfo
       && sumAttrs && valueMaxAttrs && valueMinAttrs),
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;

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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {' '}
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
