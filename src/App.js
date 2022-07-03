import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange() {
    console.log('target');
    console.log(this);
    // this.setState({
    //   cardName: target.value,
    // });
  }

  render() {
    const {
      cardName,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <h1><b>Adicionar nova Carta</b></h1>
        <br />
        <br />
        <b className="Nome">Nome:</b>
        <input
          type="text"
          className="name-input"
          value={ cardName }
          onChange={ this.onInputChange }
          data-testid="name-input"
        />
        <Form
          cardName={ cardName }
        />
        <Card
          cardName={ cardName }
        />
      </div>
    );
  }
}

export default App;

/*
  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ this.state.cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ button }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}
*/
