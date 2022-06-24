import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { isSaveButtonDisabled, onSaveButtonClick } = this.props;

    return (
      <button
        className="save-button"
        disabled={ isSaveButtonDisabled }
        onClick={ onSaveButtonClick }
        data-testid="save-button"
        type="submit"
      >
        Salvar
      </button>
    );
  }
}

Button.propTypes = {
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
