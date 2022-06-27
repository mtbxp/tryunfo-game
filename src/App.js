import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/generic.css';

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
    };
  }

  validationForm = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;

    const maxTotalAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;

    const sum = (Number(cardAttr1)
      + Number(cardAttr2) + Number(cardAttr3)) <= maxTotalAttr;

    const maxValueImput = Number(cardAttr1) <= maxAttr
    && Number(cardAttr2) <= maxAttr
    && Number(cardAttr3) <= maxAttr;

    const minValueImput = Number(cardAttr1) >= minAttr
    && Number(cardAttr2) >= minAttr
    && Number(cardAttr3) >= minAttr;

    if (cardName && cardDescription && cardImage
      && sum && maxValueImput && minValueImput) {
      return false;
    }
    return true;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({
      isSaveButtonDisabled: this.validationForm(),
    }));
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
        <section>
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
            onInputChange={ this.handleChange }
          />
        </section>
        <section>
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
        </section>
      </div>
    );
  }
}

export default App;
