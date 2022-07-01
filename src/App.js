import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      descript: '',
      image: '',
      tr1: '',
      tr2: '',
      tr3: '',
      rare: '',
      trunfo: false,
    };
  }

  onInputChange = ({ target }) => {
    const { name, type, checked, value } = target;
    const valor = type === 'checkbox' ? checked : value;
    this.setState({ [name]: valor });
  }

  onSaveButtonClick = () => {
  }

  render() {
    const {
      name,
      descript,
      tr1,
      tr2,
      tr3,
      image,
      rare,
      trunfo,
    } = this.state;
    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ descript }
          cardAttr1={ tr1 }
          cardAttr2={ tr2 }
          cardAttr3={ tr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
      </>
    );
  }
}

export default App;
