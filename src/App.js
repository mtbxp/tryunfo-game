import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    const inicialState = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
    };
    this.setState = { inicialState };
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSaveButtonClick = () => {};

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>

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
