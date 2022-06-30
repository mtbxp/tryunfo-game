import React from 'react';
import { Card } from './components/Card';
import { Form } from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.enableSaveButton = this.enableSaveButton.bind(this);
  }

  onSaveButtonClick(e) {
    e.preventDefault();
  //   // Passar o state inteiro para o componente Pai
  //   const { add } = this.props;
  //   // valida os campos title e level, se tudo estiver certo aí sim faz o add
  //   if (this.validateForm()) {
  //     add(this.state);
  //     // reset state depois de enviar
  //     this.setState({
  //       cardName: '',
  //       cardDesciption: '',
  //       cardAttr1: '',
  //       cardAttr2: '',
  //       cardAttr3: '',
  //       cardImage: '',
  //       cardRare: '',
  //       cardTrunfo: false,
  //       saveBtn: '',
  //     });
    // }
  }

  onInputChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState(({ [name]: value }), () => this.enableSaveButton());
  }

  enableSaveButton() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const attrSum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    if (
      cardName
      && cardDescription
      && cardImage
      && cardRare
      && cardAttr1 >= 0
      && cardAttr2 >= 0
      && cardAttr3 >= 0
      && cardAttr1 <= +'90'
      && cardAttr2 <= +'90'
      && cardAttr3 <= +'90'
      && attrSum < Number('211')
    ) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
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
      <div>
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
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
