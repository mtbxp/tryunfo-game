import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      describe: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      select: 'normal',
      check: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      {
        [target.name]: value,
      },
      () => this.setState({
        isSaveButtonDisabled: this.validateButton(),
      }),
    );
  }

  validateButton = () => {
    const {
      name,
      describe,
      image,
      attr1,
      attr2,
      attr3,
    } = this.state;

    const valorMaximo = 90;
    const valorMinimo = 0;
    const somaMaxima = 210;

    const testaMaximoValor = Number(attr1) <= valorMaximo
      && Number(attr2) <= valorMaximo
      && Number(attr3) <= valorMaximo;

    const testaMinimoValor = Number(attr1) >= valorMinimo
      && Number(attr2) >= valorMinimo
      && Number(attr3) >= valorMinimo;

    const semValor = name !== '' && describe !== '' && image !== '';
    const testeSoma = Number(attr1) + Number(attr2) + Number(attr3) <= somaMaxima;

    if (semValor && testeSoma && testaMaximoValor && testaMinimoValor) {
      return false;
    }
    return true;
  };

  onSaveButtonClick = () => {};

  render() {
    const {
      name,
      describe,
      attr1,
      attr2,
      attr3,
      image,
      select,
      check,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <h1 className="tryunfo">Tryunfo</h1>
        <div className="global">
          <Form
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ select }
            cardTrunfo={ check }
          />
          <Card
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ select }
            cardTrunfo={ check }
          />
        </div>
      </>
    );
  }
}

export default App;
