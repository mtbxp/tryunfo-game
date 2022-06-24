import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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

    };

    this.handleValue = this.handleValue.bind(this);
  }

  handleValue({ target }) {
    console.log(target.value);
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { cardName,
      onInputChange,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          // cardName=""
          // cardDescription=""
          // cardAttr1=""
          // cardAttr2=""
          // cardAttr3=""
          // cardImage=""
          // cardRare=""
          // cardTrunfo={ false }
          // hasTrunfo={ false }
          // isSaveButtonDisabled={ false }
          onInputChange={ this.handleValue }
          // onSaveButtonClick=""
        />
        <Card
          cardName={ cardName }
          onInputChange={ onInputChange }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
      </div>
    );
  }
}

export default App;
