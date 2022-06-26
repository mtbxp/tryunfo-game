import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Header from './components/Header';
import './styles/app.css';

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
      cardRare: 'normal',
      cardTrunfo: false,
      remainingPoints: 210,
    };
  }

  handleChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const stateValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: stateValue,
    }, () => {
      if (name.startsWith('cardAttr')) this.calculateRemainingPoints();
    });
  }

  calculateRemainingPoints = () => {
    const maxAttrSum = 210;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    this.setState({
      remainingPoints: (
        maxAttrSum - Number(cardAttr1) - Number(cardAttr2) - Number(cardAttr3)
      ),
    });
  }

  validateLength = (...params) => params.every((param) => param.length > 0);

  validateSum = (maxSum, ...params) => {
    const totalSum = params.reduce((sum, param) => sum + Number(param), 0);
    return totalSum <= maxSum;
  }

  validateMin = (min, ...params) => params.every((param) => Number(param) >= min);

  validateMax = (max, ...params) => params.every((param) => Number(param) <= max);

  validateForm = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const isValidLength = this.validateLength(cardName, cardDescription, cardImage);

    const maxAttrSum = 210;
    const isValidSum = this.validateSum(maxAttrSum, cardAttr1, cardAttr2, cardAttr3);

    const isValidMin = this.validateMin(0, cardAttr1, cardAttr2, cardAttr3);

    const maxAttrValue = 90;
    const isValidMax = this.validateMax(maxAttrValue, cardAttr1, cardAttr2, cardAttr3);

    return (isValidLength && isValidSum && isValidMin && isValidMax);
  }

  // handleSubmit = (event) => {
  //   event.preventDefault();

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
      remainingPoints,
    } = this.state;

    return (
      <>
        <Header />
        <main>
          <section className="add-new-card">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              remainingPoints={ remainingPoints }
              onInputChange={ this.handleChange }
              isSaveButtonDisabled={ !this.validateForm() }
            />
            <div className="card-preview">
              <h3>Pré-visualização</h3>
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
          </section>
        </main>
      </>
    );
  }
}

export default App;
