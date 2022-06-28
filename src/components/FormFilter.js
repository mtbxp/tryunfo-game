import React from 'react';
import PropTypes from 'prop-types';

class FormFilter extends React.Component {
  render() {
    const { onNameSearch, onRareSearch, onTrunfoChecked, isInputDisable } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-filter">
            <input
              data-testid="name-filter"
              type="text"
              placeholder="Nome da carta"
              id="name-filter"
              disabled={ isInputDisable }
              onChange={ onNameSearch }
            />
          </label>

          <label htmlFor="rare-filter">
            <select
              data-testid="rare-filter"
              id="rare-filter"
              disabled={ isInputDisable }
              onChange={ onRareSearch }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-filter">
            <input
              data-testid="trunfo-filter"
              type="checkbox"
              name="trunfo"
              id="trunfo-filter"
              onChange={ onTrunfoChecked }
            />
            Super Trybe Trunfo
          </label>
        </form>
      </div>
    );
  }
}

FormFilter.propTypes = {
  onNameSearch: PropTypes.func.isRequired,
  onRareSearch: PropTypes.func.isRequired,
  onTrunfoChecked: PropTypes.func.isRequired,
  isInputDisable: PropTypes.bool.isRequired,
};

export default FormFilter;
