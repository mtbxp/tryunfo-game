import React from 'react';
import '../styles/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p>
          Desenvolvido por
          {' '}
          <strong>Juliana Álvares</strong>
          , 2022.
        </p>
        <p>
          Contato:
          {' '}
          <em>sobrenome.nome@hotmail.com</em>
        </p>
        <p className="ref">
          Conteúdo das cartas e imagens extrídos e adaptados do site:
          {' '}
          <a href="https://www.statsf1.com/pt/pilotes.aspx" target="_blank" rel="noreferrer">STATS F1 - Pilotos</a>
          , em Junho de 2022.
        </p>
      </footer>
    );
  }
}

export default Footer;
