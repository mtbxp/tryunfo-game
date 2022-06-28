import React from 'react';
import PropTypes from 'prop-types';

class FormFilter extends React.Component {
  render() {
    const { onNameSearch, onRareSearch } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name-filter">
            <input
              data-testid="name-filter"
              type="text"
              placeholder="Nome da carta"
              id="name-filter"
              onChange={ onNameSearch }
            />
          </label>
          <label htmlFor="rare-filter">
            <select
              data-testid="rare-filter"
              id="rare-filter"
              onChange={ onRareSearch }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

FormFilter.propTypes = {
  onNameSearch: PropTypes.func.isRequired,
  onRareSearch: PropTypes.func.isRequired,
};

export default FormFilter;
