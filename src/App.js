import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '',
  //     cardAttr2: '',
  //     cardAttr3: '',
  //     cardImage: '',
  //     cardRare: '',
  //     cardTrunfo: true,
  //     hasTrunfo: false,
  //     isSaveButtonDisabled: false,
  //     onInputChange: () => { },
  //     onSaveButtonClick: () => { },
  //   };
  // }

  // onInputChange = ({ target }) => {
  //   const { name, type } = target;
  //   const value = type === 'checkbox' ? target.checked : target.value;

  //   this.setState({
  //     [name]: value,
  //   });
  // }

  // onSaveButtonClick = () => {}

  render() {
    // const {
    //   cardName, cardDescription, cardAttr1,
    //   cardAttr2, cardAttr3, cardImage, cardRare,
    //   cardTrunfo, hasTrunfo, isSaveButtonDisabled,
    //   onInputChange, onSaveButtonClick,
    // } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;

// CRIEI O ESTADO E PENSEI QUE JÁ PRECISARIA PASSAR AS PROPS,
// POR ISSO ESSES COMENTÁRIOS
// CASO PRECISE NOS PRÓXIMOS REQUISITOS, AQUI ESTÃO. :)

// cardName={ cardName }
// cardDescription={ cardDescription }
// cardAttr1={ cardAttr1 }
// cardAttr2={ cardAttr2 }
// cardAttr3={ cardAttr3 }
// cardImage={ cardImage }
// cardRare={ cardRare }
// cardTrunfo={ cardTrunfo }
// hasTrunfo={ hasTrunfo }
// isSaveButtonDisabled={ isSaveButtonDisabled }
// onInputChange={ onInputChange }
// onSaveButtonClick={ onSaveButtonClick }

// cardName={ cardName }
// cardDescription={ cardDescription }
// cardAttr1={ cardAttr1 }
// cardAttr2={ cardAttr2 }
// cardAttr3={ cardAttr3 }
// cardImage={ cardImage }
// cardRare={ cardRare }
// cardTrunfo={ cardTrunfo }
// onInputChange={ onInputChange }
