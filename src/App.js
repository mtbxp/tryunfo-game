import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const limitU = 90;
const limitG = 210;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.saveButtonOpenN = this.saveButtonOpenN.bind(this);
    this.saveButtonOpenS = this.saveButtonOpenS.bind(this);
    this.saveButtonOpenW = this.saveButtonOpenW.bind(this);
    this.isSaveButton = this.isSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name, type, value, checked } = target;
    if (type === 'checkbox') {
      return this.setState({
        [name]: checked,
      }, () => this.isSaveButton());
    }
    this.setState({
      [name]: value,
    }, () => this.isSaveButton());
  }

  onSaveButtonClick() {
    return this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardTrunfo: false,
      cardRare: 'normal',
    });
  }

  saveButtonOpenN(atributinho) {
    return (atributinho >= 0 && atributinho <= limitU);
  }

  saveButtonOpenS(cd1, cd2, cd3) {
    const sum = Number(cd1) + Number(cd2) + Number(cd3);
    return (sum <= limitG);
  }

  saveButtonOpenW(textoInput) {
    return (textoInput.length > 0);
  }

  isSaveButton() {
    const {
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardName,
      cardDescription,
      cardImage,
    } = this.state;
    // op significa as operações. Indo de 1 a 7
    const op1 = this.saveButtonOpenN(cardAttr1); // Atributo 1 validado
    const op2 = this.saveButtonOpenN(cardAttr2); // Atributo 2 validado
    const op3 = this.saveButtonOpenN(cardAttr3); // Atributo 3 validado
    const op4 = this.saveButtonOpenS(cardAttr1, cardAttr2, cardAttr3); // Limite alcançado
    const op5 = this.saveButtonOpenW(cardName); // Name presente
    const op6 = this.saveButtonOpenW(cardDescription); // Descrição presente
    const op7 = this.saveButtonOpenW(cardImage); // Imagem presente
    if (op1 && op2 && op3 && op4 && op5 && op6 && op7) {
      return this.setState({
        isSaveButtonDisabled: false,
      });
    }
    return this.setState({
      isSaveButtonDisabled: true,
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
      // onSaveButtonClick,
      // hasTrunfo,
    } = this.state;
    return (
      <div>
        <div id="tituloH1"><h1>Tryunfo</h1></div>
        <div className="telaDividida">
          <div className="telaDividida" id="idForm">
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
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="telaDividida" id="idCard">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
