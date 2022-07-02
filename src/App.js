import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './styles/App.css';

class App extends React.Component {
  // Para o 'construtor' foi consultado a documentação no React (https://reactjs.org/docs/react-component.html#constructor)
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

  // Maria Clara e Graciele Sampaio

  formValidation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maxAllAttr = 210;
    const maxAttr = 90;
    const minAttr = 0;
    if (cardName !== ''
    && cardDescription !== ''
    && cardImage !== ''
    && cardRare !== ''
    && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)) <= maxAllAttr
    && Number(cardAttr1) >= minAttr
    && Number(cardAttr1) <= maxAttr
    && Number(cardAttr2) >= minAttr
    && Number(cardAttr2) <= maxAttr
    && Number(cardAttr3) >= minAttr
    && Number(cardAttr3) <= maxAttr
    ) {
      return false;
    }
    return true;
  };

  // Para as funções 'onInputChange' e 'onSaveButtonClick' foi consultado a aula ao vivo 'Aula 11.2 - Formulários no React' do curso da Trybe
  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.setState({ isSaveButtonDisabled: this.formValidation() }));
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    // addCard(this.state);
    console.log(event);
    // this.setState({
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '',
    //   cardAttr2: '',
    //   cardAttr3: '',
    //   cardImage: '',
    //   cardRare: '',
    //   cardTrunfo: false,
    //   hasTrunfo: false,
    //   isSaveButtonDisabled: true,
    // });
  };

  // // Para a função 'addNewCard' foi consultado a aula ao vivo 'Aula 11.2 - Formulários no React' do curso da Trybe
  // addNewCard = (newcard) => {
  //   this.setState((previousState) => ({
  //     cards: [newcard, ...previousState.cards],
  //   }));
  // };

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
      hasTrunfo,
      isSaveButtonDisabled } = this.state;

    return (
      <main className="body">
        <header className="header">
          <h1>Tryunfo</h1>
        </header>
        <section className="card-creation">
          <section className="input-area">
            <Form
              onSaveButtonClick={ this.onSaveButtonClick }
              onInputChange={ this.onInputChange }
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
            />
          </section>
          <section className="preview-area">
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
        </section>
      </main>
    );
  }
}

export default App;
