import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nameinput: '',
      descriptioninput: '',
      attr1input: '',
      attr2input: '',
      attr3input: '',
      imageinput: '',
      rareinput: 'normal',
      trunfoinput: false,
      hadtrunfu: false,
      savebutton: true,
      existcart: [],
    };
  }

  valButtton = () => {
    const { nameinput, descriptioninput, attr1input, attr2input,
      attr3input, imageinput,
    } = this.state;
    let validade = true;
    const sumVal = (Number(attr1input)
    + Number(attr2input) + Number(attr3input)) <= Number('210');

    const maxinput = Number(attr1input) <= Number('90')
    && Number(attr2input) <= Number('90')
    && Number(attr3input) <= Number('90');

    const minval = Number(attr1input) >= Number('0')
    && Number(attr2input) >= Number('0')
    && Number(attr3input) >= Number('0');

    const hadlength = nameinput !== ''
    && descriptioninput !== ''
    && imageinput !== '';

    if (minval && maxinput && sumVal && hadlength) {
      validade = false;
    }
    return validade;
  }

  executSv = () => {
    this.setState({
      savebutton: this.valButtton(),
    });
  }

  valTryunfo = () => {
    const { trunfoinput } = this.state;
    let result = null;

    if (trunfoinput === false) {
      result = false;
      return result;
    }
    result = true;
    return result;
  }

  clickButton = () => {
    const { nameinput, descriptioninput, attr1input, attr2input,
      attr3input, imageinput, rareinput, trunfoinput, existcart, hadtrunfu,
    } = this.state;
    this.setState(
      (eln) => ({
        nameinput: '',
        descriptioninput: '',
        attr1input: 0,
        attr2input: 0,
        attr3input: 0,
        imageinput: '',
        rareinput: 'normal',
        trunfoinput: false,
        hadtrunfu: eln.trunfoinput,
        existcart: [
          {
            nameinput,
            descriptioninput,
            attr1input,
            attr2input,
            attr3input,
            imageinput,
            rareinput,
            trunfoinput,
            existcart,
            hadtrunfu,
          },
          ...eln.existcart,
        ],
      }),
      () => this.setState({ hadtrunfu: this.valTryunfo() }),
    );
  }

  handleChange = (env) => {
    const { name } = env.target;
    let { value } = env.target;

    if (name === 'trunfoinput') value = env.target.checked;
    this.setState(
      {
        [name]: value,
      },
      () => this.executSv(),
    );
  }

  render() {
    const { nameinput, descriptioninput, attr1input, attr2input, savebutton,
      attr3input, imageinput, rareinput, trunfoinput, hadtrunfu, existcart,
    } = this.state;
    return (
      <div>
        <div>
          <h1 className="titleT">Tryunfo</h1>
          <div className="conteinerTwoletters">
            <Form
              cardName={ nameinput }
              cardDescription={ descriptioninput }
              cardAttr1={ attr1input }
              cardAttr2={ attr2input }
              cardAttr3={ attr3input }
              cardImage={ imageinput }
              cardRare={ rareinput }
              cardTrunfo={ trunfoinput }
              hasTrunfo={ hadtrunfu }
              isSaveButtonDisabled={ savebutton }
              onInputChange={ this.handleChange }
              onSaveButtonClick={ this.clickButton }
            />

            <div className="peviewCard">
              <h1 className="previewT">Preview</h1>
              <Card
                cardName={ nameinput }
                cardDescription={ descriptioninput }
                cardAttr1={ attr1input }
                cardAttr2={ attr2input }
                cardAttr3={ attr3input }
                cardImage={ imageinput }
                cardRare={ rareinput }
                cardTrunfo={ trunfoinput }
              />
            </div>
          </div>
        </div>
        <div className="conteinerHadCardts">
          <h1>Suas Cartas</h1>
          <div className="hadCard">
            {existcart.map((elm) => (
              <Card
                cardName={ elm.nameinput }
                cardDescription={ elm.descriptioninput }
                cardAttr1={ elm.attr1input }
                cardAttr2={ elm.attr2input }
                cardAttr3={ elm.attr3input }
                cardImage={ elm.imageinput }
                cardRare={ elm.rareinput }
                cardTrunfo={ elm.trunfoinput }
                key={ elm.nameinput }
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
