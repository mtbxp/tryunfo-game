import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDesc: '',
      attrOne: '',
      attrTwo: '',
      attrThree: '',
      cardImg: '',
      cardRarity: '',
      // checkBox: false,
      // saveBtn: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  //   // Passar o state inteiro para o componente Pai
  //   const { add } = this.props;
  //   // valida os campos title e level, se tudo estiver certo aí sim faz o add
  //   if (this.validateForm()) {
  //     add(this.state);
  //     // reset state depois de enviar
  //     this.setState({
  //       cardName: '',
  //       cardDesc: '',
  //       attrOne: '',
  //       attrTwo: '',
  //       attrThree: '',
  //       cardImg: '',
  //       cardRarity: '',
  //       checkBox: false,
  //       saveBtn: '',
  //     });
    // }
  }

  handleChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      cardName,
      cardDesc,
      attrOne,
      attrTwo,
      attrThree,
      cardImg,
      cardRarity,
      // checkBox,
      // saveBtn,
    } = this.state;
    return (
      <form
        className="form"
        onSubmit={ this.handleSubmit }
      >
        <label className="labelForCardName" htmlFor="cardName">
          Nome
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForCardDesc" htmlFor="cardDesc">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDesc"
            id="cardDesc"
            value={ cardDesc }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForAttrOne" htmlFor="attrOne">
          Attr01
          <input
            data-testid="attr1-input"
            type="text"
            name="attrOne"
            id="attrOne"
            value={ attrOne }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForAttrTwo" htmlFor="attrTwo">
          Attr02
          <input
            data-testid="attr2-input"
            type="text"
            name="attrTwo"
            id="attrTwo"
            value={ attrTwo }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForAttrThree" htmlFor="attrThree">
          Attr03
          <input
            data-testid="attr3-input"
            type="text"
            name="attrThree"
            id="attrThree"
            value={ attrThree }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForCardImg" htmlFor="cardImg">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImg"
            id="cardImg"
            value={ cardImg }
            onChange={ this.handleChange }
          />
        </label>
        <br />
        <label className="labelForCardRarity" htmlFor="cardRarity">
          Raridade
          <select
            data-testid="rare-input"
            name="cardRarity"
            id="cardRarity"
            value={ cardRarity }
            onChange={ this.handleChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <br />
        <label className="labelForCheckBox" htmlFor="checkBox">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="checkBox"
            id="checkBox"
            value="false"
            onChange={ this.handleChange }
          />
          Super Trybe Trunfo
        </label>
        <br />
        <label className="labelForSaveBtn" htmlFor="saveBtn">
          <input
            data-testid="save-button"
            type="submit"
            name="saveBtn"
            id="saveBtn"
            value="Salvar"
          />
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  attrOne: PropTypes.string,
  attrThree: PropTypes.string,
  attrTwo: PropTypes.string,
  cardDesc: PropTypes.string,
  cardImg: PropTypes.string,
  cardName: PropTypes.string,
  cardRarity: PropTypes.string,
  checkBox: PropTypes.string,
  saveBtn: PropTypes.string,
}.isRequired;

export default Form;
