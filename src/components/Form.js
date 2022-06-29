import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="iptName">
          Nome
          <input data-testid="name-input" type="text" name="iptName" />
        </label>
        <label htmlFor="txaDescript">
          Descrição
          <textarea data-testid="description-input" name="txaDescript" />
        </label>
        <label htmlFor="iptAtt1">
          Attr01
          <input data-testid="attr1-input" type="number" name="iptAtt1" />
        </label>
        <label htmlFor="iptAtt2">
          Attr02
          <input data-testid="attr2-input" type="number" name="iptAtt2" />
        </label>
        <label htmlFor="iptAtt3">
          Attr03
          <input data-testid="attr3-input" type="number" name="iptAtt3" />
        </label>
        <label htmlFor="iptImg">
          Imagem
          <input data-testid="image-input" type="text" name="iptImg" />
        </label>
        <label htmlFor="iptRar">
          Raridade
          <select data-testid="rare-input" name="iptRar">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="iptCheck">
          Super Trybe Trunfo
          <input data-testid="trunfo-input" type="checkbox" name="iptCheck" />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </div>
    );
  }
}

export default Form;
