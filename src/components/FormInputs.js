import React from 'react';
import PropTypes from 'prop-types';

class FormInputs extends React.Component {
  render() {
    const { id, type, label, valor, change, nome } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <input
          type={ type }
          data-testid={ id }
          id={ id }
          value={ valor }
          onChange={ change }
          name={ nome }
        />
      </label>

    );
  }
}
FormInputs.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  nome: PropTypes.string.isRequired,
};

export default FormInputs;
