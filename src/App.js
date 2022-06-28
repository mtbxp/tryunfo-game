import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

// Hello World!
class App extends React.Component {
  /*
  cardName="Leonardo"
  cardDescription=""
  cardAttr1=""
  cardAttr2=""
  cardAttr3=""
  cardImage=""
  cardRare=""
  cardTrunfo=""
  hasTrunfo=""
  isSaveButtonDisabled=""
  onInputChange=""
  onSaveButtonClick=""
  */
  constructor() {
    super();
    this.state = {
      cardName: 'Edu Matador',
      cardDescription: 'Essa carta tem o poder de golear o adversário nos acrescimos.',
      cardAttr1: '50',
      cardAttr2: '10',
      cardAttr3: '30',
      cardImage: 'https://pbs.twimg.com/media/FL4K12IXwAEsmfV.jpg:large',
      cardRare: 'raro',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, localName } = target;
    console.log(localName);
    const value = (type !== 'checkbox')
      ? target.value : target.checked;
    this.setState(({
      [name]: value,
    }));
  }

  onSaveButtonClick = () => {

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
      hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <header>
          <h1>Trunfo Brasileirão Série B:</h1>
        </header>
        <main>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            onInputChange={ this.onInputChange }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
        </main>
      </>
    );
  }
}

export default App;
