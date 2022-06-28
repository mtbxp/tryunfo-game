import React from 'react';
import { Form } from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr01: '',
      cardAttr02: '',
      cardAttr03: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = (e) => {
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
  //       cardAttr01: '',
  //       cardAttr02: '',
  //       cardAttr3: '',
  //       cardImage: '',
  //       cardRare: '',
  //       cardTrunfo: false,
  //       saveBtn: '',
  //     });
    // }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr01,
      cardAttr02,
      cardAttr03,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      onInputChange,
      isSaveButtonDisabled,
      onSaveButtonClick,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          cardDesc={ cardDescription }
          cardAttrOne={ cardAttr01 }
          cardAttrTwo={ cardAttr02 }
          cardAttrThree={ cardAttr03 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
