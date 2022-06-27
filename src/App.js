import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '',
      attr2: '',
      attr3: '',
      image: '',
      rare: 'normal',
      trunfo: false,
      // hasTrunfo: false,
      // isSaveButtonDisabled: true,
      arrayCards: [],
    };
  }

  validateForm = () => {
    const { name, description, image, rare, attr1, attr2, attr3 } = this.state;

    const sum = Number(attr1) + Number(attr2) + Number(attr3); // -> Number para transformar string em num parseInt tava dando erro no lint.

    const attrTotal = 210;
    const attrMax = 90;
    const attrMin = 0;

    const anyInfo = (name !== ''
      && description !== ''
      && image !== ''
      && rare !== ''
    );

    const attr = (sum <= attrTotal
      && attr1 <= attrMax
      && attr2 <= attrMax
      && attr3 <= attrMax
      && attr1 >= attrMin
      && attr2 >= attrMin
      && attr3 >= attrMin
    );

    if (anyInfo && attr) {
      return false;
    }
    return true;
  }

  hasTrunfo = () => {
    const { arrayCards } = this.state;
    return arrayCards.some((item) => item.trunfo);
  }

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick = (e) => {
    e.preventDefault();
    this.setState((prev) => ({
      name: '',
      description: '',
      image: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      trunfo: false,
      rare: 'normal',
      arrayCards: [...prev.arrayCards, prev],
    }
    ));
  }

  render() {
    const { name, description, attr1,
      attr2, attr3, image,
      rare, trunfo, arrayCards } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ this.hasTrunfo() }
          isSaveButtonDisabled={ this.validateForm() }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }

        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }

        />

        <div>
          {
            (arrayCards.map((item, index) => (
              <div key={ index }>
                <Card
                  cardName={ item.name }
                  cardDescription={ item.description }
                  cardAttr1={ item.attr1 }
                  cardAttr2={ item.attr2 }
                  cardAttr3={ item.attr3 }
                  cardImage={ item.image }
                  cardTrunfo={ item.trunfo }
                  cardRare={ item.rare }
                />
              </div>
            )))
          }
        </div>
      </div>
    );
  }
}

export default App;
