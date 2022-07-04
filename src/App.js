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
  }

  onInputChange({ target }) {
    console.log(target);
    console.log('target');
    console.log(this);
    const { name, type } = target;
    if (type === 'checkbox') {
      return this.setState({
        [name]: true,
      });
    }
    this.setState({
      [name]: target.value,
    });
  }

  saveButtonOpen1() {
    const { cardAttr1 } = this.state;
    if (cardAttr1 >= 0 && cardAttr1 <= limitU) return true;
    return false;
  }

  saveButtonOpen2() {
    const { cardAttr2 } = this.state;
    if (cardAttr2 >= 0 && cardAttr2 <= limitU) return true;
    return false;
  }

  saveButtonOpen3() {
    const { cardAttr3 } = this.state;
    if (cardAttr3 >= 0 && cardAttr3 <= limitU) return true;
    return false;
  }

  saveButtonOpen4() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const cd1 = cardAttr1;
    const cd2 = cardAttr2;
    const cd3 = cardAttr3;
    if (cd1 + cd2 + cd3 <= limitG) return true;
    return false;
  }

  saveButtonOpen5() {
    const { cardName } = this.state;
    if (cardName.length > 0) return true;
    return false;
  }

  saveButtonOpen6() {
    const { cardDescription } = this.state;
    if (cardDescription.length > 0) return true;
    return false;
  }

  saveButtonOpen7() {
    const { cardImage } = this.state;
    if (cardImage.length > 0) return true;
    return false;
  }

  // isSaveButtonOpen() {
  //   const { isSaveButtonDisabled } = this.state;
  //   const op1 = this.saveButtonOpen1();
  //   const op2 = this.saveButtonOpen2();
  //   const op3 = this.saveButtonOpen3();
  //   const op4 = this.saveButtonOpen4();
  //   const op5 = this.saveButtonOpen5();
  //   const op6 = this.saveButtonOpen6();
  //   const op7 = this.saveButtonOpen7();
  //   if (!op1 || !op2 || !op3 || !op4 || !op5 || !op6 || !op7) {
  //     return this.setState({
  //       isSaveButtonOpen: true,
  //     });
  //   }
  //   return this.setState({
  //     isSaveButtonOpen: false,
  //   });
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
              onSaveButtonClick={ onSaveButtonClick }
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
              onSaveButtonClick={ onSaveButtonClick }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
