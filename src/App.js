import React from 'react'; // exodia obliterar
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    this.state = {
      cardName: "",
      cardImage: "",
      cardDescription: "",
      cardAttr1:"",
      cardAttr2:"",
      cardAttr3:"",
      cardRare:"",
      cardTrunfo:false,
    };
  }

  onInputChange({target}) {
    const { name } = target
    const value = target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]:value
    })
  }



  render() {
    const {
      cardName,
      cardImage,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo
    } = this.state
    return (
      <div>
        <h1 id="title">Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
