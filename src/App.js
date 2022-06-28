import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    nameInput: 'Nome da Carta',
    descriptionInput: 'Descrição',
    attr1Input: '0',
    attr2Input: '0',
    attr3Input: '0',
    imageInput: 'https://cdn-icons-png.flaticon.com/512/7733/7733781.png',
    rareInput: 'normal',
    trunfoInput: false,
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

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
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <main>
          <h2>Crie sua carta</h2>
          <Form onInputChange={ this.handleChange } />
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
