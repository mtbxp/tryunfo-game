/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validate = yup.object.shape({
  cardName: yup.string().required(),
  cardDescription: yup.string().required(),
  cardAttr1: yup.number().required(),
  cardAttr2: yup.number().required(),
  cardAttr3: yup.number().required(),
  cardImage: yup.string().required(),
  cardRare: yup.string().required(),
});


function Form() {

    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validate),
    });
    const onSubmit = (data) => console.log(data);
    const { onInputChange, onSaveButtonClick } = this.props;
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, isSaveButtonDisabled,
    } = this.props;
        return (
      <form className="texto" onSubmit={ handleSubmit(onSubmit) }>
        <label htmlFor="name-input">
          Nome
          <input
            type="text"
            data-testid="name-input"
            id="name-input"
            value={ cardName }
            name="cardName"
            onChange={ onInputChange }
            placeholder="Nome"
            required="required"
            { ...register('nome') }
          />
          <p className="error-message">{errors.nome?.message}</p>
        </label>
        <label htmlFor="description-input">
          Descrição
          <textarea
            type="textarea"
            data-testid="description-input"
            id="description-input"
            value={ cardDescription }
            name="cardDescription"
            placeholder="Descrição"
            onChange={ onInputChange }
            required="required"
          />

        </label>

        <label htmlFor="attr1-input">
          Attr1
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
            placeholder="1-90"
            required="required"
            min="1"
            max="90"
          />

        </label>
        <label htmlFor="attr2-input">
          Attr2
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
            placeholder="1-90"
            required="required"
            min="1"
            max="90"
          />

        </label>
        <label htmlFor="attr3-input">
          Attr3
          {' '}
          <input
            type="number"
            data-testid="attr3-input"
            value={ cardAttr3 }
            name="cardAttr3"
            htmlFor="attr2-input"
            onChange={ onInputChange }
            placeholder="1-90"
            required="required"
            min="1"
            max="90"
          />

        </label>
        <label htmlFor="image-input">
          Imagem
          {' '}
          <input
            type="text"
            data-testid="image-input"
            id="image-input"
            value={ cardImage }
            name="cardImage"
            onChange={ onInputChange }
            placeholder="img.jpeg"
            required="required"
          />

        </label>
        <label htmlFor="rare-input">
          Raridade
          {' '}
          <select
            data-testid="rare-input"
            value={ cardRare }
            id="rare-input"
            name="cardRare"
            onChange={ onInputChange }
            placeholder="Clique e escolha"
            required="required"
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>

        </label>
        <label htmlFor="trunfo-input">
          Super Trybe Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-input"
            id="trunfo-input"
            name="cardTrunfo"
            value={ cardTrunfo }
            checked={ cardTrunfo }
            onChange={ onInputChange }
            required="required"
          />

        </label>
        <label htmlFor="save-button">
          <input
            type="submit"
            data-testid="save-button"
            id="save-button"
            value="Salvar"
            name="salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />
        </label>
      </form>
    );
  }
}
Form.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
