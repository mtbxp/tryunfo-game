import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import FormFilter from './components/FormFilter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameCard: '',
      descriptionCard: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      imageCard: '',
      rarity: 'normal',
      deck: [],
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      filterName: '',
      filterRare: 'todas',
      filterTrunfo: false,
      isInputDisable: false,
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleCard,
      onNameSearch: this.handleFilterName,
      onRareSearch: this.handleFilterRare,
      onTrunfoChecked: this.handleTrunfoChecked,
    };
  }

  handleStringInput = () => {
    const { nameCard, descriptionCard, imageCard, rarity } = this.state;

    if (nameCard !== '' && descriptionCard !== '' && imageCard !== '' && rarity !== '') {
      return true;
    }

    return false;
  }

  handleAttrInput = () => {
    const { attr1, attr2, attr3 } = this.state;

    const totalAttr = parseInt(attr1, 10) + parseInt(attr2, 10) + parseInt(attr3, 10);
    const totalMaximumAttr = 210;
    const minimunAttr = 0;
    const maxAttr = 90;

    if (parseInt(attr1, 10) >= minimunAttr
    && parseInt(attr2, 10) >= minimunAttr
    && parseInt(attr3, 10) >= minimunAttr
    && parseInt(attr1, 10) <= maxAttr
    && parseInt(attr2, 10) <= maxAttr
    && parseInt(attr3, 10) <= maxAttr
    && totalAttr <= totalMaximumAttr) return true;

    return false;
  }

  handleEnableButton = (stringInput, attrInput) => {
    if (stringInput && attrInput) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  handleChange = (event) => {
    const { name, type, value, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;
    this.setState({
      [name]: inputValue,
    }, () => {
      const stringsInput = this.handleStringInput();
      const attrInput = this.handleAttrInput();

      this.handleEnableButton(stringsInput, attrInput);
    });
  }

  addNewCard = (card) => {
    this.setState((prevState) => ({
      deck: [...prevState.deck, card],
    }));
  }

  handleCard = (event) => {
    event.preventDefault();
    const { nameCard, descriptionCard,
      attr1, attr2, attr3, imageCard, rarity, trunfo } = this.state;

    if (trunfo) {
      this.setState({
        hasTrunfo: true,
        trunfo: false,
      });
    }

    const card = {
      nameCard,
      descriptionCard,
      attr1,
      attr2,
      attr3,
      imageCard,
      rarity,
      trunfo,
    };

    this.addNewCard(card);

    this.setState({
      nameCard: '',
      descriptionCard: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      imageCard: '',
      rarity: 'normal',
    });
  }

  handleDeleteButton = (cardName, cardTrunfo) => {
    const { deck } = this.state;
    const newDeck = deck.filter((card) => card.nameCard !== cardName);

    this.setState({
      deck: newDeck,
    });

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  handleFilterName = (event) => {
    const { value } = event.target;
    this.setState({
      filterName: value,
    });
  }

  handleFilterRare = (event) => {
    const { value } = event.target;
    this.setState({
      filterRare: value,
    });
  }

  handleTrunfoChecked = (event) => {
    const { checked } = event.target;
    this.setState({
      filterTrunfo: checked,
    });
    if (checked) {
      this.setState({
        isInputDisable: true,
      });
    } else {
      this.setState({
        isInputDisable: false,
      });
    }
  }

  render() {
    const {
      nameCard, descriptionCard,
      attr1, attr2, attr3,
      imageCard, rarity, trunfo,
      deck, hasTrunfo, isSaveButtonDisabled,
      filterName, filterRare, filterTrunfo,
      isInputDisable,
      onInputChange, onSaveButtonClick, onNameSearch,
      onRareSearch, onTrunfoChecked,
    } = this.state;

    return (
      <>
        <h1>Tryunfo</h1>
        <Form
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ nameCard }
          cardDescription={ descriptionCard }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageCard }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
        <section>
          <FormFilter
            isInputDisable={ isInputDisable }
            onNameSearch={ onNameSearch }
            onRareSearch={ onRareSearch }
            onTrunfoChecked={ onTrunfoChecked }
          />
          {
            deck
              .filter((card) => card.nameCard.includes(filterName))
              .filter((card) => (
                filterRare === 'todas' ? card.rarity.includes('')
                  : card.rarity === filterRare
              ))
              .filter((card) => (filterTrunfo ? card.trunfo === true
                : card.trunfo === true || card.trunfo === false))
              .map((card) => (
                <Card
                  key={ card.nameCard }
                  cardName={ card.nameCard }
                  cardDescription={ card.descriptionCard }
                  cardAttr1={ card.attr1 }
                  cardAttr2={ card.attr2 }
                  cardAttr3={ card.attr3 }
                  cardImage={ card.imageCard }
                  cardRare={ card.rarity }
                  cardTrunfo={ card.trunfo }
                  cardList
                  handleDeleteButton={ this.handleDeleteButton }
                />
              ))
          }
        </section>
      </>
    );
  }
}

export default App;
