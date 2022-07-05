import React from 'react';
import PropTypes from 'prop-types';

class Inputs extends React.Component {
  render() {
    const { disabled, nameFilter, rareFilter, checkFilter } = this.props;
    return (
      <div className="input-container">
        <input
          type="text"
          disabled={ disabled }
          onChange={ nameFilter }
          data-testid="name-filter"
        />
        <select
          disabled={ disabled }
          onChange={ rareFilter }
          data-testid="rare-filter"
        >
          <option>todas</option>
          <option>normal</option>
          <option>raro</option>
          <option>muito raro</option>
        </select>
        <div>
          <input
            type="checkbox"
            onChange={ checkFilter }
            data-testid="trunfo-filter"
          />
          { ' Trunfo ' }
        </div>
      </div>
    );
  }
}

Inputs.propTypes = {
  disabled: PropTypes.bool.isRequired,
  nameFilter: PropTypes.func.isRequired,
  rareFilter: PropTypes.func.isRequired,
  checkFilter: PropTypes.func.isRequired,
};

export default Inputs;
