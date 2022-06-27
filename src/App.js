import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: '',
      trunfo: false,
    };
  }

  handler({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  enableButton() {
    const { state } = this;
    const a1 = parseInt(state.attr1, 10);
    const a2 = parseInt(state.attr2, 10);
    const a3 = parseInt(state.attr3, 10);
    const maxAttr = 90;
    const attrSum = 210;

    if (state.name !== ''
        && state.description !== ''
        && state.image !== ''
        && state.rare !== ''
        && a1 <= maxAttr
        && a1 >= 0
        && a2 <= maxAttr
        && a2 >= 0
        && a3 <= maxAttr
        && a3 >= 0
        && a1 + a2 + a3 <= attrSum
    ) return false;
    return true;
  }

  render() {
    const { state } = this;
    return (
      <div>
        <h1>TRYUNFO</h1>
        <Form
          onInputChange={ this.handler }
          isSaveButtonDisabled={ this.enableButton() }
        />
        <Card
          cardName={ state.name }
          cardDescription={ state.description }
          cardImage={ state.image }
          cardAttr1={ state.attr1 }
          cardAttr2={ state.attr2 }
          cardAttr3={ state.attr3 }
          cardRare={ state.rare }
          cardTrunfo={ state.trunfo }
        />
      </div>
    );
  }
}

export default App;
