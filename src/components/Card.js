import React from "react";

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props

    return (
      <div>
        <p data-testid="name-card" >{cardName}</p>
        <img
          src={cardImage}
          alt={cardName}
          data-testid="image-card"
        ></img>
        <p data-testid="description-card" >{cardDescription}</p>
        <p data-testid="attr1-card" >{cardAttr1}</p>
        <p data-testid="attr2-card" >{cardAttr2}</p>
        <p data-testid="attr3-card" >{cardAttr3}</p>
        <p data-testid="rare-card" >{cardRare}</p>
        {cardTrunfo === true ? <p data-testid="trunfo-card" >Super Trunfo</p> : null}

      </div >

    )
  }
}

export default Card;
