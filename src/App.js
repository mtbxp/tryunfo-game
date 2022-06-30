import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
// iniciado
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameInput: '',
      descriptionInput: '',
      attr1Input: 0,
      attr2Input: 0,
      attr3Input: 0,
      imageInput: '',
      rareInput: '',
      trunfoInput: false
    };
  }

  handleInputChange = ({ target }) => {
    console.log(target.value);
    console.log(target.name);
    if (target.name !== 'trunfoInput') {
      this.setState({
        [target.name]: target.value,
      });
    } else {
      this.setState({
        [target.name]: target.checked,
      });
    }
  }

  render() {
    const { nameInput, descriptionInput, attr1Input, attr2Input,
      attr3Input, imageInput, rareInput, trunfoInput } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleInputChange } />
        <Card
          cardName={ nameInput }
          cardImage={ imageInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardTrunfo={ trunfoInput }
        />
      </div>
    );
  }
}

export default App;
