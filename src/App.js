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
      isSaveButtonDisabled: true,
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

  onSaveButtonClick = () => {}

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
      isSaveButtonDisabled,
    } = this.state;

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
          hasTrunfo={ false }
          isSaveButtonDisabled={ isSaveButtonDisabled }
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
      </div>
    );
  }
}

export default App;
