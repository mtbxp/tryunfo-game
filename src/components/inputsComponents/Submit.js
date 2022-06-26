import React from 'react';
import PropTypes from 'prop-types';

class Submit extends React.Component {
  render() {
    const {
      disabled,
      onSaveButtonClick,
    } = this.props;

    return (
      <button
        data-testid="save-button"
        type="button"
        name="disabled"
        disabled={ disabled }
        onClick={ onSaveButtonClick }
      >
        Salvar
      </button>
    );
  }
}

Submit.propTypes = {
  disabled: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Submit;
