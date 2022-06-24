import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      cardName: "",
      cardDescription: "Alguma coisa",
      cardAttr1: "",
      cardAttr2: "",
      cardAttr3: "",
      cardImage: "",
      cardRare: "",
      cardTrunfo: false,
      hasTrunfo: "",
      isSaveButtonDisabled: "",
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    console.log(target.checked)
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    })
  }

  onSaveButtonClick(event) {
    console.log(event.target)
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={this.state.cardName}
          cardDescription={this.state.cardDescription}
          cardAttr1={this.state.cardAttr1}
          cardAttr2={this.state.cardAttr2}
          cardAttr3={this.state.cardAttr3}
          cardImage={this.state.cardImage}
          cardRare={this.state.cardRare}
          cardTrunfo={this.state.cardTrunfo}
          hasTrunfo={this.state.hasTrunfo}
          isSaveButtonDisabled={this.state.isSaveButtonDisabled}
          onInputChange={this.onInputChange}
          onSaveButtonClick={this.onSaveButtonClick}
        />
        <Card
          cardName={this.state.cardName}
          cardDescription={this.state.cardDescription}
          cardAttr1={this.state.cardAttr1}
          cardAttr2={this.state.cardAttr2}
          cardAttr3={this.state.cardAttr3}
          cardImage={this.state.cardImage}
          cardRare={this.state.cardRare}
          cardTrunfo={this.state.cardTrunfo}
          hasTrunfo={this.state.hasTrunfo}
        />
      </div>
    );
  }
}

export default App;
