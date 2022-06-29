import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filter from './components/Filter';
import './styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cards: [],
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
    };
  }

  filteringByName = (event) => {
    this.setState({
      filterName: event.target.value,
    });
  }

  filteringByRarity = (event) => {
    this.setState({
      filterRare: (event.target.value),
    });
  }

  filteringByTrunfo = () => {
    this.setState(({ filterTrunfo: filter }) => ({
      filterTrunfo: !filter,
    }));
  }

  fillCards = () => {
    const { cards, filterTrunfo, filterName, filterRare } = this.state;
    const filteredCards = cards
      .filter((card) => ((filterTrunfo) ? card.cardTrunfo : true))
      .filter((card) => (filterRare === 'todas' ? true : card.cardRare === filterRare))
      .filter((card) => (!filterName ? true : card.cardName.includes(filterName)));
    return filteredCards;
  }

  validateTrunfo = () => {
    const { cards } = this.state;
    return cards.some(({ cardTrunfo: isTrunfo }) => isTrunfo);
  };

  isSaveButtonDisabled = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;
    const maximumScore = 210;
    const maxSkillScore = 90;

    const totalScoreOfSkills = ((Number(cardAttr1) <= maxSkillScore)
      && (Number(cardAttr1) >= 0))
      && ((Number(cardAttr2) <= maxSkillScore)
      && (Number(cardAttr2) >= 0))
      && ((Number(cardAttr3) <= maxSkillScore)
      && (Number(cardAttr3) >= 0));

    const allScore = (Number(cardAttr1)
      + Number(cardAttr2)
      + Number(cardAttr3)) <= maximumScore;

    return !(!!cardName
      && cardDescription && cardImage && cardRare && allScore && totalScoreOfSkills);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;
    this.setState(({ cards: prevList }) => ({
      cards: [...prevList, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      },
      ],
    }),
    () => this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: this.validateTrunfo(),
    }));
  }

  onInputChange = (event) => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  removeCards = (key) => {
    const { hasTrunfo } = this.state;
    this.setState(({ cards: prevList }) => ({
      cards: (prevList.filter(({ cardName }) => cardName !== key)),
    }), () => {
      if (hasTrunfo) {
        this.setState({
          hasTrunfo: this.validateTrunfo(),
        });
      }
    });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      filterTrunfo,
    } = this.state;

    return (
      <>
        <section className="App">
          <div className="form-content">
            <h1>Tryunfo</h1>
            <Form
              { ...this.state }
              isSaveButtonDisabled={ this.isSaveButtonDisabled() }
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
            />
          </div>
          <div className="card-content">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              deleteButton={ false }
              removeCards={ this.removeCards }
            />
          </div>
        </section>
        <section className="card-deck">
          <Filter
            filteringByName={ this.filteringByName }
            filteringByTrunfo={ this.filteringByTrunfo }
            filteringByRarity={ this.filteringByRarity }
            filterTrunfo={ filterTrunfo }
          />
          {this.fillCards().map(
            ({
              cardName: name,
              cardDescription: descript,
              cardAttr1: attr1,
              cardAttr2: attr2,
              cardAttr3: attr3,
              cardImage: img,
              cardRare: rare,
              cardTrunfo: trunfo,
            }) => (
              <Card
                key={ name }
                cardName={ name }
                cardDescription={ descript }
                cardAttr1={ attr1 }
                cardAttr2={ attr2 }
                cardAttr3={ attr3 }
                cardImage={ img }
                cardRare={ rare }
                cardTrunfo={ trunfo }
                deleteButton
                removeCards={ this.removeCards }
              />
            ),
          )}
        </section>
      </>
    );
  }
}

export default App;
