import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      // cardName: '',
      // cardDescription: '',
      // cardAttr1: '',
      // cardAttr2: '',
      // cardAttr3: '',
      // cardImage: '',
      // cardRare: '',
      // cardTrunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: false,
    };
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
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
