import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './style/Style.css';

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
      superTrunfo: false,
      btnDisable: true,
      cards: [],
    };

    this.handle = this.handle.bind(this);
    this.validate = this.validate.bind(this);
    this.saveCard = this.saveCard.bind(this);
  }

  handle({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.validate();
    });
  }

  validate() {
    const { name, description, image, attr1, attr2, attr3 } = this.state;
    const maxTotal = 210;
    const maxPerAttr = 90;
    const minPerAttr = 0;

    const vazio = name !== '' && description !== '' && image !== '';

    const maxTotalAttr = Number(attr1) + Number(attr2) + Number(attr3) <= maxTotal;

    const maxInOnlyAtt = Number(attr1) <= maxPerAttr
    && Number(attr2) <= maxPerAttr
    && Number(attr3) <= maxPerAttr;

    const minInOnlyAtt = Number(attr1) >= minPerAttr
    && Number(attr2) >= minPerAttr
    && Number(attr3) >= minPerAttr;

    if (vazio && maxTotalAttr && maxInOnlyAtt && minInOnlyAtt) {
      this.setState({
        btnDisable: false,
      });
    } else {
      this.setState({
        btnDisable: true,
      });
    }
  }

  saveCard(event) {
    event.preventDefault();
    const {
      name, description, attr1, attr2, attr3, image, rare, superTrunfo, cards,
    } = this.state;

    this.setState({
      cards: [...cards, {
        nome: name,
        desc: description,
        a1: attr1,
        a2: attr2,
        a3: attr3,
        img: image,
        raridade: rare,
        trunfo: superTrunfo,
      }],
      name: '',
      description: '',
      attr1: '0',
      attr2: '0',
      attr3: '0',
      image: '',
      rare: 'normal',
      superTrunfo: false,
      btnDisable: true,
    });
  }

  render() {
    const {
      name, description, attr1, attr2, attr3, image, rare, superTrunfo, btnDisable,
    } = this.state;

    return (
      <main>
        <article className="creatingCards">
          <section className="formCard">
            <Form
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ superTrunfo }
              hasTrunfo={ false }
              isSaveButtonDisabled={ btnDisable }
              onInputChange={ this.handle }
              onSaveButtonClick={ this.saveCard }
            />
          </section>

          <section className="previewCard">
            <Card
              cardName={ name }
              cardDescription={ description }
              cardAttr1={ attr1 }
              cardAttr2={ attr2 }
              cardAttr3={ attr3 }
              cardImage={ image }
              cardRare={ rare }
              cardTrunfo={ superTrunfo }
            />
          </section>
        </article>
      </main>
    );
  }
}

export default App;
