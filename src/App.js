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
      cardat1: '0',
      cardat2: '0',
      cardat3: '0',
      cardart: '',
      cardrare: 'normal',
      cardtrunfo: '',
      isSaveButtonDisabled: true,
      cardlist: [],
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
    }, () => this.validate());
    // this.validate();
  }

  validate = () => {
    const { cardname, carddescription, cardat1,
      cardat2, cardat3, cardart } = this.state;
    const MAX_ATT = 90;
    const MAX_TOTAL_ATT = 210;

    if (
      cardname.length > 0
      && carddescription.length > 0
      && cardart.length > 0
      && parseInt(cardat1, 10) <= MAX_ATT
      && parseInt(cardat1, 10) >= 0
      && parseInt(cardat2, 10) <= MAX_ATT
      && parseInt(cardat2, 10) >= 0
      && parseInt(cardat3, 10) <= MAX_ATT
      && parseInt(cardat3, 10) >= 0
      && (parseInt(cardat1, 10) + parseInt(cardat2, 10) + parseInt(cardat3, 10)
      <= MAX_TOTAL_ATT)
    ) this.setState({ isSaveButtonDisabled: false });
    else this.setState({ isSaveButtonDisabled: true });
    // console.log(cardname, carddescription, cardat1, cardat2, cardat3, cardart, isSaveButtonDisabled);
  }

  save = (e) => {
    e.preventDefault();
    const { cardname, carddescription, cardat1, cardat2,
      cardat3, cardart, cardrare, cardtrunfo, cardlist } = this.state;
    const carta = { cardname,
      carddescription,
      cardat1,
      cardat2,
      cardat3,
      cardart,
      cardrare,
      cardtrunfo,
    };
    this.setState({
      cardlist: [carta, ...cardlist],
      cardname: '',
      carddescription: '',
      cardat1: '0',
      cardat2: '0',
      cardat3: '0',
      cardart: '',
      cardrare: 'normal',
      cardtrunfo: '',
    }, () => this.validate());
    // this.validate();
  }

  render() {
    const { cardname, carddescription, cardat1, cardat2,
      cardat3, cardart, cardrare, cardtrunfo,
      isSaveButtonDisabled, cardlist } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <div className="divApp">
          <Form
            onInputChange={ this.onInputChange }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.save }
            cardName={ cardname }
            cardDescription={ carddescription }
            cardAttr1={ cardat1 }
            cardAttr2={ cardat2 }
            cardAttr3={ cardat3 }
            cardImage={ cardart }
            cardRare={ cardrare }
            cardTrunfo={ cardtrunfo }
          />
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
        <div className="cartas-adicionadas">
          {cardlist.map((e) => (
            <Card
              key={ e.cardname }
              cardName={ e.cardname }
              cardDescription={ e.carddescription }
              cardAttr1={ e.cardat1 }
              cardAttr2={ e.cardat2 }
              cardAttr3={ e.cardat3 }
              cardImage={ e.cardart }
              cardRare={ e.cardrare }
              cardTrunfo={ e.cardtrunfo }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
