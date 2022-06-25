import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  onSaveButtonClick = () => console.log('fufou');


  handle = ({ target }) => {
    const { name, type } = target;
    let value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  // handle = (event) => {
  //   const { name } = event.target;
  //   let { value } = event.target;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  render() {

    return (
      <div>
        <h1>Tryunfoo</h1>
        <Form
          { ...this.state }
          onInputChange= { this.handle }
          // onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
        { ...this.state }
        />
      </div>
    );
  }
}

export default App;
