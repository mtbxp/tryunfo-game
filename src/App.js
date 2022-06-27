import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      describe: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      image: '',
      select: 'normal',
      check: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    const {
      name,
      describe,
      attr1,
      attr2,
      attr3,
      image,
      select,
      check,
    } = this.state;

    return (
      <>
        <h1 className="tryunfo">Tryunfo</h1>
        <div className="global">
          <Form
            onInputChange={ this.handleChange }
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ select }
            cardTrunfo={ check }
          />
          <Card
            cardName={ name }
            cardDescription={ describe }
            cardAttr1={ attr1 }
            cardAttr2={ attr2 }
            cardAttr3={ attr3 }
            cardImage={ image }
            cardRare={ select }
            cardTrunfo={ check }
          />
        </div>
      </>
    );
  }
}

export default App;
