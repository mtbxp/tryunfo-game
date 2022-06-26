import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const maxValueSum = 210;
const maxValue = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value },
      () => this.setState({
        isSaveButtonDisabled: this.validateSaveButton(),
      }));
  }

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { name, description, image, attr1, attr2, attr3, rare, trunfo } = this.state;

    this.setState((prevState) => ({
      name: '',
      description: '',
      image: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      rare: 'normal',
      trunfo: false,
      hasTrunfo: prevState.trunfo,
      cards: [
        ...prevState.cards,
        { name, description, image, attr1, attr2, attr3, rare, trunfo },
      ],
    }));
  };

  validateSaveButton = () => {
    const { name, description, image, attr1, attr2, attr3 } = this.state;

    const notEmpty = name !== '' && description !== '' && image !== '';

    const maxTotalValue = Number(attr1) + Number(attr2) + Number(attr3) <= maxValueSum;

    const maxValueForEach = Number(attr1) <= maxValue
    && Number(attr2) <= maxValue && Number(attr3) <= maxValue;

    const minValueForEach = Number(attr1) >= 0
    && Number(attr2) >= 0 && Number(attr3) >= 0;

    if (notEmpty && maxTotalValue && maxValueForEach && minValueForEach) return false;

    return true;
  }

  render() {
    const {
      name,
      description,
      image,
      attr1,
      attr2,
      attr3,
      rare,
      trunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    return (
      <div>
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
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
        </div>
        <div>
          <h1>Preview</h1>
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
        </div>
        <div>
          <h1>Your Cards</h1>
          {cards.map((card) => (
            <Card
              cardName={ card.name }
              cardDescription={ card.description }
              cardAttr1={ card.attr1 }
              cardAttr2={ card.attr2 }
              cardAttr3={ card.attr3 }
              cardImage={ card.image }
              cardRare={ card.rare }
              cardTrunfo={ card.trunfo }
              key={ card.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
