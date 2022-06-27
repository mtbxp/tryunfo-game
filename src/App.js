import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    // eslint-disable-next-line no-lone-blocks

    this.state = {

      nameInput: '',
      descriptionInput: '',
      attr1Input: '',
      attr2Input: '',
      attr3Input: '',
      imageInput: '',
      rareInput: '',
      trunfoInput: false,
      // saveButton:
    };
  }

  onInputChange = ({ target }) => {
    console.log(target.value);
    this.setState({
      [target.name]: (target.value),
    });
  }

  render() {
    const {
      nameInput, descriptionInput,
      attr1Input, attr2Input, attr3Input,
      imageInput, rareInput, trunfoInput } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ nameInput }
          cardDescription={ descriptionInput }
          cardAttr1={ attr1Input }
          cardAttr2={ attr2Input }
          cardAttr3={ attr3Input }
          cardRare={ rareInput }
          cardImage={ imageInput }
          cardTrunfo={ trunfoInput }
        />
      </div>
    );
  }
}

export default App;
