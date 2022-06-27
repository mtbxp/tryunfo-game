import React from 'react';
import Form from './components/Form';

const stateInicial = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardImage: '',
  cardRare: '',
  cardTrunfo: Boolean,
  hasTrunfo: Boolean,
  isSaveButtonDisabled: Boolean,
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateInicial;
  }

  onInputChange = () => {};

  onSaveButtonClick = () => {};

  render() {
    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
          state={ this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
      </div>
    );
  }
}

export default App;
