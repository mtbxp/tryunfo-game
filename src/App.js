import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.handler = this.handler.bind(this);
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

  render() {
    const { state } = this;
    return (
      <div>
        <h1>TRYUNFO</h1>
        <Form
          onInputChange={ this.handler }
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
