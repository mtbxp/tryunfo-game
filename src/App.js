import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardname: '',
      carddescription: '',
      cardat1: '',
      cardat2: '',
      cardat3: '',
      cardart: '',
      cardrare: 'normal',
      cardtrunfo: '',
    };
  }

  onInputChange = (event) => {
    // event.target.type === 'checkbox' ? this.setState({ [event.target.name]: event.target.checked })
    //   : this.setState({ [event.target.name]: event.target.value });
    // da maneira acima funcionou mas o lint não gostou xD
    const { name, type } = event.target;
    const value = type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { cardname, carddescription, cardat1, cardat2,
      cardat3, cardart, cardrare, cardtrunfo } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="divApp">
          <Form onInputChange={ this.onInputChange } />
          <Card
            cardName={ cardname }
            cardDescription={ carddescription }
            cardAttr1={ cardat1 }
            cardAttr2={ cardat2 }
            cardAttr3={ cardat3 }
            cardImage={ cardart }
            cardRare={ cardrare }
            cardTrunfo={ cardtrunfo }
          />
        </div>
      </div>
    );
  }
}

export default App;
