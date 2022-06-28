import React from 'react';
import PropTypes from 'prop-types';

class FormFilter extends React.Component {
  render() {
    const { onNameSearch } = this.props;
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
        </form>
      </div>
    );
  }
}

FormFilter.propTypes = {
  onNameSearch: PropTypes.func.isRequired,
};

export default FormFilter;
