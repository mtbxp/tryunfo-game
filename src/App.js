import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
    state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      // card: [],
    };

  validadTypeNumber = (keys, numbers) => {
    const numMax = 90;
    if (numbers >= 0 && numbers <= numMax) {
      this.setState({ [keys]: numbers });
    } else {
      this.setState({ [keys]: '' });
    }
  }

  onInputChange = ({ target }) => {
    const { name, type, value, checked } = target;
    if (type === 'number') {
      this.validadTypeNumber(name, value);
    } else {
      this.setState({
        [name]: type === 'checkbox' ? checked : value,
      }, () => this.validateField());
    }
  }

  validateField = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;
    if (cardName
      && cardDescription
      && cardAttr1 && cardAttr2 && cardAttr3 && cardImage && cardRare) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  // validateName= () => {
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardImage,
  //     cardRare,
  //   } = this.state;

  //   if (cardName && cardDescription && cardImage && cardRare) {
  //     this.setState({ isSaveButtonDisabled: false });
  //   }
  //   // } if (cardAttr1 <= 90 && cardAttr2 <= 90 && cardAttr3 <= 90) {
  //   //   validate3 = false;
  //   // } if (cardAttr1 >= 0 && cardAttr2 >= 0 && cardAttr3 >= 0) {
  //   //   validate4 = false;
  //   // }
  //   if (validate1 === false) {
  //     this.setState({ isSaveButtonDisabled: false });
  //   } else { this.setState({ isSaveButtonDisabled: true }); }
  // }

  // onSaveButtonClick = (event) => {
  //   event.preventDefault();
  //   const {
  //     cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     cardRare,
  //     cardTrunfo,
  //   } = this.state;

  //   const objects = {
  //     cardName,
  //     cardDescription,
  //     cardAttr1,
  //     cardAttr2,
  //     cardAttr3,
  //     cardImage,
  //     cardRare,
  //     cardTrunfo,
  //   }

  //   this.setState((prevState) => ({ card: [...prevState.card, objects] }), () => {
  //     this.setState({
  //       cardName: '',
  //       cardDescription: '',
  //       cardAttr1: '',
  //       cardAttr2: '',
  //       cardAttr3: '',
  //       cardImage: '',
  //       cardRare: 'normal',
  //     }),
  //   })
  // }

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
      <>
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
          isSaveButtonDisabled={ isSaveButtonDisabled }
          validateSavingButtom={ this.validateSavingButtom }
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
      </>
    );
  }
}

export default App;
