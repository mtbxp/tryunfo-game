import React from 'react';
import PropTypes from 'prop-types';

class TrunfoCard extends React.Component {
  render() {
    const {
      cardTrunfo,
    } = this.props;

    const trunfoElement = <h2 data-testid="trunfo-card">Super Trunfo</h2>;

    return (
      <div>
        { cardTrunfo ? trunfoElement : null}
      </div>
    );
  }
}

TrunfoCard.propTypes = {
  cardTrunfo: PropTypes.string.isRequired,
};

export default TrunfoCard;
