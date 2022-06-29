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
      // saveButton: '',
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    console.log(target);
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value },
      () => {
        this.isSaveButtonDisabled();
      });
  }

  isSaveButtonDisabled = () => {
    const {
      nameInput, descriptionInput,
      imageInput, rareInput, attr1Input, attr2Input, attr3Input } = this.state;

    if (nameInput !== '' && descriptionInput !== ''
      && imageInput !== '' && rareInput !== '') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    const som = 210;
    const limit = 90;
    if (attr1Input > limit
      || attr1Input < 0
      || attr2Input > limit
      || attr2Input < 0
      || attr3Input > limit
      || attr3Input < 0) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
    const somatorio = parseInt(attr1Input, 10) + parseInt(attr2Input, 10)
    + parseInt(attr3Input, 10);
    if (somatorio > som) {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  render() {
    const {
      nameInput, descriptionInput,
      attr1Input, attr2Input, attr3Input,
      imageInput, rareInput, isSaveButtonDisabled, trunfoInput } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
