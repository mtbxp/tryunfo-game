import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

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
  }

  onInputChange({ target }) {
    console.log(target);
    console.log('target');
    console.log(this);
    const { name } = target;
    this.setState({
      [name]: target.value,
    });
  }

  // saveButtonOpen1() {
  //   if (cardAttr1.target.value >= 0 && cardAttr1.target.value <= 90) return true;
  //   return false;
  // }

  // saveButtonOpen2() {
  //   if (cardAttr2.target.value >= 0 && cardAttr2.target.value <= 90) return true;
  //   return false;
  // }

  // saveButtonOpen3() {
  //   if (cardAttr3.target.value >= 0 && cardAttr3.target.value <= 90) return true;
  //   return false;
  // }

  // saveButtonOpen4() {
  //   const cd1 = cardAttr1.target.value;
  //   const cd2 = cardAttr2.target.value;
  //   const cd3 = cardAttr3.target.value;
  //   if (cd1 + cd2 + cd3 <= 210) return true;
  //   return false;
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
      onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <div id="tituloH1"><h1>Tryunfo</h1></div>
        <div id="telaDividida">
          <div id="idForm">
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
              onSaveButtonClick={ onSaveButtonClick }
            />
          </div>
          <div id="idCard">
            <Card
              cardName={ cardName }
              cardImage={ cardImage }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ onSaveButtonClick }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
