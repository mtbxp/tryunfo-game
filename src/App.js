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
      attr1: '',
      attr2: '',
      attr3: '',
      rare: 'normal',
      image: '',
      superTrunfo: false,
      btnDisable: false,
    };

    this.handle = this.handle.bind(this);
  }

  handle({ target }) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
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
              onSaveButtonClick={ () => {} }
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
