import React from 'react';
import Card from './components/Card';
import From from './components/From';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameinput: '',
      descriptioninput: '',
      attr1input: '',
      attr2input: '',
      attr3input: '',
      imageinput: '',
      rareinput: 'normal',
      trunfoinput: false,
      hadtrunfu: false,
      savebutton: true,
    };
  }

  handleChange = (env) => {
    const { name } = env.target;
    let { value } = env.target;
    if (name === 'trunfoinput') value = env.target.checked;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { nameinput, descriptioninput, attr1input, attr2input,
      attr3input, imageinput, rareinput, trunfoinput, hadtrunfu, savebutton,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <From
          cardName={ nameinput }
          cardDescription={ descriptioninput }
          cardAttr1={ attr1input }
          cardAttr2={ attr2input }
          cardAttr3={ attr3input }
          cardImage={ imageinput }
          cardRare={ rareinput }
          cardTrunfo={ trunfoinput }
          hasTrunfo={ hadtrunfu }
          isSaveButtonDisabled={ savebutton }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ () => {} }
        />

        <Card
          cardName={ nameinput }
          cardDescription={ descriptioninput }
          cardAttr1={ attr1input }
          cardAttr2={ attr2input }
          cardAttr3={ attr3input }
          cardImage={ imageinput }
          cardRare={ rareinput }
          cardTrunfo={ trunfoinput }
        />
      </div>
    );
  }
}

export default App;
