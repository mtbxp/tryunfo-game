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
      cardsList: [],
    };
  }

  // Para a função 'formValidation' foi recebido a orientação e auxilio da Maria Clara Reis e Graciele Sampaio - Turma 22 - Tribo A
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

  // Para a função 'onSaveButtonClick' foi recebido a orientação e auxilio da Graciele Sampaio, Daniel Rubens e João Gustavo - Turma 22 - Tribo A // Ademais para 'setState' foi consultado a documentação no React (https://reactjs.org/docs/react-component.html#setstate)
  onSaveButtonClick = (event) => {
    event.preventDefault();

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled } = this.state;

    const objState = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled };

    this.setState((prevState) => ({
      cardsList: [{ objState }, ...prevState.cardsList],
    }), () => this.setState(({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    })));
  };

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
      isSaveButtonDisabled,
      cardsList } = this.state;

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
            <h2>Pré-visualização</h2>
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
        <section className="cards-area">
          { cardsList.map((card) => (<Card
            key={ card.objState.cardName }
            cardName={ card.objState.cardName }
            cardDescription={ card.objState.cardDescription }
            cardAttr1={ card.objState.cardAttr1 }
            cardAttr2={ card.objState.cardAttr2 }
            cardAttr3={ card.objState.cardAttr3 }
            cardImage={ card.objState.cardImage }
            cardRare={ card.objState.cardRare }
            cardTrunfo={ card.objState.cardTrunfo }
          />))}
        </section>
      </main>
    );
  }
}

export default App;
