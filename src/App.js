import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    nameInput: '',
    descriptionInput: '',
    attr1Input: '',
    attr2Input: '',
    attr3Input: '',
    imageInput: '',
    rareInput: 'normal',
    trunfoInput: false,
    buttonDisabled: true,
  }

  teste = () => {
    const {
      nameInput, descriptionInput, imageInput, attr1Input, attr2Input, attr3Input,
    } = this.state;
    const attr1Number = parseInt(attr1Input, 10);
    const attr2Number = parseInt(attr2Input, 10);
    const attr3Number = parseInt(attr3Input, 10);
    const maxTotal = 210;
    const maxAtt = 90;
    const minAtt = 0;
    if (nameInput !== ''
    && descriptionInput !== ''
    && imageInput !== ''
    && attr1Number >= minAtt
    && attr2Number >= minAtt
    && attr3Number >= minAtt
    && attr1Number <= maxAtt
    && attr2Number <= maxAtt
    && attr3Number <= maxAtt
    && (attr1Number + attr2Number + attr3Number) <= maxTotal) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.teste);
  }

  render() {
    const {
      nameInput,
      descriptionInput,
      attr1Input,
      attr2Input,
      attr3Input,
      imageInput,
      rareInput,
      trunfoInput,
      buttonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <h2>Crie sua carta</h2>
          <Form
            onInputChange={ this.handleChange }
            isSaveButtonDisabled={ buttonDisabled }
          />
          <Card
            cardName={ nameInput }
            cardDescription={ descriptionInput }
            cardAttr1={ attr1Input }
            cardAttr2={ attr2Input }
            cardAttr3={ attr3Input }
            cardImage={ imageInput }
            cardRare={ rareInput }
            cardTrunfo={ trunfoInput }
          />
        </main>
      </div>
    );
  }
}

export default App;
