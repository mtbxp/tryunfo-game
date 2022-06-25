import React from 'react';
// import PropTypes from 'prop-types';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.buttonValidation = this.buttonValidation.bind(this);

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
      // onInputChange: () => { },
      // onSaveButtonClick: () => { },
    };
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.buttonValidation(target);
    });
  }

  buttonValidation = () => {
    const attrMax = 90;
    const max = 210;
    const {
      cardName, cardDescription,
      cardImage, cardRare, cardAttr1, cardAttr2, cardAttr3,
    } = this.state;

    const arrOfAttr = [cardAttr1, cardAttr2, cardAttr3].map((value) => value)
      .map((value) => parseFloat(value)).reduce((acc, curr) => acc + curr);

    // if (target.type === 'number' && parseFloat(target.value) > attrMaxAllowed) {
    //   this.setState({
    //     [target.name]: attrMaxAllowed,
    //   });
    // }

    if (cardName && cardDescription && cardImage
      && cardRare && arrOfAttr <= max && cardAttr1 >= 0
       && cardAttr2 >= 0 && cardAttr3 >= 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }

    if (cardAttr1 > attrMax || cardAttr2 > attrMax || cardAttr3 > attrMax) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    } = this.state;

    return (
      <div className="App">
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

// App.propTypes = {
//   onInputChange: PropTypes.func.isRequired,
// };

export default App;
