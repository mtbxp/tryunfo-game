import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  componentDidMount() {
    console.log('oi');
  }

  componentDidUpdate() {
    this.validateBtn();
  }

  validateBtn = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, isSaveButtonDisabled } = this.state;
    // const textArr = [cardName, cardDescription, cardImage, cardRare];
    const totalAtributte = 210;
    const atrArr = [cardAttr1, cardAttr2, cardAttr3]
      .reduce((acc, curr) => acc + Number(curr), 0);

    let shouldBtnBeDisable = true;
    if (atrArr < totalAtributte) {
      shouldBtnBeDisable = false;
    } else {
      shouldBtnBeDisable = true;
    }
    if (shouldBtnBeDisable !== isSaveButtonDisabled) {
      this.setState({
        isSaveButtonDisabled: shouldBtnBeDisable,
      });
    }
    // const validateInput = [
    //   {
    //     text: textArr.every((el) => el.length > 0),
    //     atributtes: atrArr > 210 ? true : false,
    //   },
    // ];
    //   {
    //     text: () => {
    //       if (cardName.length && cardDescription.length
    //         && cardImage.length && cardRare.length > 0) {
    //         return true;
    //       }
    //     },
    //     attributes: () => {
    //       if(cardAttr1 && cardAttr2 && cardAttr3 >)
    //     },
    //   },
    // ];
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  // onSaveButtonClick() {
  //   return 'oi';
  // }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;

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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
          onInputChange={ this.onInputChange }
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
