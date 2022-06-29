/* Critérios dos atributos das cartas:
1) Raridade:
    - Campeões do mundo: cartas muito raras;
    - Vencedores de GPs: cartas raras;
    - Demais pilotos: cartas normais;
2) Atributos:
    - Attr1 - Podiums: nº de podiums conquistados (max. de 90 pontos);
    - Attr2 - Melhores Voltas: nº de melhores voltas (max. de 90 pontos);
    - Attr3 - Pole Positions: nº de pole positions (max. de 90 pontos e max. total (Attr1 + Attr2 + Attr3) de 210 pontos).
3) Super Trunfo:
    - Meu piloto favorito!!! S2
*/
const normal = 'normal';
const raro = 'raro';
const muitoRaro = 'muito raro';
const cardData = [
  { cardName: 'Alexander Albon',
    cardDescription: 'Alexander Albon Ansusinha, nascido em 23/03/1996 - Tailândia. '
      + 'Primeiro Grande Prémio: 2019. Melhor classificação em Campeonato Mundial'
      + ': 7° em 2020. Em 2022 competindo pela escuderia Williams.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/alexander-albon/2022.jpg',
    cardAttr1: '2',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Fernando Alonso',
    cardDescription: 'Fernando Alonso Díaz, nascido em 29/07/1981 - Espanha. '
      + 'Primeiro Grande Prémio: 2001. Campeão do Mundo em 2005 e 2006. '
      + 'Em 2022 competindo pela escuderia Alpine.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/fernando-alonso/2022.jpg',
    cardAttr1: '90',
    cardAttr2: '23',
    cardAttr3: '22',
    cardRare: muitoRaro,
    cardTrunfo: false },
  { cardName: 'Valtteri Bottas',
    cardDescription: 'Valtteri Viktor Bottas, nascido em 28/08/1989 - Finlândia. '
      + 'Primeiro Grande Prémio: 2013. Melhor classificação em Campeonato Mundial: '
      + '2° em 2019 e 2020. Em 2022 competindo pela escuderia Alfa Romeo.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/valtteri-bottas/2022.jpg',
    cardAttr1: '67',
    cardAttr2: '19',
    cardAttr3: '20',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'Pierre Gasly',
    cardDescription: 'Pierre Jean-Jacques Gasly, nascido em 07/02/1996 - França. '
      + 'Primeiro Grande Prémio: 2017. Melhor classificação em Campeonato Mundial: '
      + '7° em 2019. Em 2022 competindo pela escuderia AlphaTauri.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/pierre-gasly/2022.jpg',
    cardAttr1: '3',
    cardAttr2: '3',
    cardAttr3: '0',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'Lewis Hamilton',
    cardDescription: 'Sir Lewis Carl Davidson Hamilton, nascido em 07/01/1985 - '
      + 'Reino Unido. Primeiro Grande Prémio: 2007. Campeão do Mundo em '
      + '2008, 2014, 2015, 2017, 2018, 2019 e 2020. '
      + 'Em 2022 competindo pela escuderia Mercedes.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/lewis-hamilton/2022.jpg',
    cardAttr1: '90',
    cardAttr2: '59',
    cardAttr3: '61',
    cardRare: muitoRaro,
    cardTrunfo: true },
  { cardName: 'Nico Hülkenberg',
    cardDescription: 'Nicolas Hülkenberg, nascido em 19/08/1987 - Alemanha. '
      + 'Primeiro Grande Prémio: 2010. Melhor classificação em Campeonato Mundial: '
      + '7° em 2018. Em 2022 competindo pela escuderia Aston Martin.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/nico-hulkenberg/2022.jpg',
    cardAttr1: '0',
    cardAttr2: '2',
    cardAttr3: '1',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Nicholas Latifi',
    cardDescription: 'Nicholas Daniel Latifi, nascido em 29/06/1995 - Canadá. '
      + 'Primeiro Grande Prémio: 2020. Melhor classificação em Campeonato Mundial: '
      + '17° em 2021. Em 2022 competindo pela escuderia Williams.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/nicholas-latifi/2022.jpg',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Charles Leclerc',
    cardDescription: 'Charles Marc Hervé Perceval Leclerc, nascido em 16/10/1997 - '
      + 'Mónaco. Primeiro Grande Prémio: 2018. Melhor classificação em '
      + 'Campeonato Mundial: 3° em 2022. Em 2022 competindo pela escuderia Ferrari.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/charles-leclerc/2022.jpg',
    cardAttr1: '17',
    cardAttr2: '7',
    cardAttr3: '15',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'Kevin Magnussen',
    cardDescription: 'Kevin Jan Magnussen, nascido em 05/10/1992 - Dinamarca. '
      + 'Primeiro Grande Prémio: 2014. Melhor classificação em Campeonato Mundial: '
      + '9° em 2018. Em 2022 competindo pela escuderia Haas.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/kevin-magnussen/2022.jpg',
    cardAttr1: '1',
    cardAttr2: '2',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Lando Norris',
    cardDescription: 'Lando Norris, nascido em 13/11/1999 - Reino Unido. '
      + 'Primeiro Grande Prémio: 2019. Melhor classificação em Campeonato Mundial: '
      + '6° em 2021. Em 2022 competindo pela escuderia McLaren.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/lando-norris/2022.jpg',
    cardAttr1: '6',
    cardAttr2: '4',
    cardAttr3: '1',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Esteban Ocon',
    cardDescription: 'Esteban José Jean-Pierre Ocon-Khelfane, nascido em 17/09/1996 - '
      + 'França. Primeiro Grande Prémio: 2016. Melhor classificação em '
      + 'Campeonato Mundial: 8° em 2017. Em 2022 competindo pela escuderia Alpine.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/esteban-ocon/2022.jpg',
    cardAttr1: '2',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'Sergio Pérez',
    cardDescription: 'Sergio Michel Pérez Mendoza, nascido em 26/01/1990 - México. '
      + 'Primeiro Grande Prémio: 2011. Melhor classificação em Campeonato Mundial: '
      + '2° em 2022. Em 2022 competindo pela escuderia Red Bull.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/sergio-perez/2022.jpg',
    cardAttr1: '20',
    cardAttr2: '8',
    cardAttr3: '1',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'Daniel Ricciardo',
    cardDescription: 'Daniel Joseph Ricciardo, nascido em 01/07/1989 - Austrália. '
      + 'Primeiro Grande Prémio: 2011. Melhor classificação em Campeonato Mundial: '
      + '3° em 2014 e 2016. Em 2022 competindo pela escuderia McLaren.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/daniel-ricciardo/2022.jpg',
    cardAttr1: '32',
    cardAttr2: '16',
    cardAttr3: '3',
    cardRare: raro,
    cardTrunfo: false },
  { cardName: 'George Russell',
    cardDescription: 'George William Russell, nascido em 15/02/1998 - Reino Unido. '
      + 'Primeiro Grande Prémio: 2019. Melhor classificação em Campeonato Mundial: '
      + '4° em 2022. Em 2022 competindo pela escuderia Mercedes.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/george-russell/2022.jpg',
    cardAttr1: '4',
    cardAttr2: '1',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Carlos Saínz',
    cardDescription: 'Carlos Saínz Vázquez de Castro, nascido em 01/09/1994 - Espanha. '
      + 'Primeiro Grande Prémio: 2015. Melhor classificação em Campeonato Mundial: '
      + '5° em 2021 e 2022. Em 2022 competindo pela escuderia Ferrari.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/carlos-sainz/2022.jpg',
    cardAttr1: '11',
    cardAttr2: '2',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Mick Schumacher',
    cardDescription: 'Mick Schumacher, nascido em 22/03/1999 - Alemanha. '
      + 'Primeiro Grande Prémio: 2021. Melhor classificação em Campeonato Mundial: '
      + '19° em 2021 e 2022. Em 2022 competindo pela escuderia Haas.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/mick-schumacher/2022.jpg',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Lance Stroll',
    cardDescription: 'Lance Strulovitch, nascido em 29/10/1998 - Canadá. '
      + 'Primeiro Grande Prémio: 2017. Melhor classificação em Campeonato Mundial: '
      + '11° em 2020. Em 2022 competindo pela escuderia Aston Martin.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/lance-stroll/2022.jpg',
    cardAttr1: '3',
    cardAttr2: '0',
    cardAttr3: '1',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Yuki Tsunoda',
    cardDescription: 'Yuki Tsunoda, nascido em 11/05/2000 - Japão. '
      + 'Primeiro Grande Prémio: 2021. Melhor classificação em Campeonato Mundial: '
      + '14° em 2021. Em 2022 competindo pela escuderia AlphaTauri.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/yuki-tsunoda/2022.jpg',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
  { cardName: 'Max Verstappen',
    cardDescription: 'Max Emilian Verstappen, nascido em 30/09/1997 - Países Baixos. '
      + 'Primeiro Grande Prémio: 2015. Campeão do Mundo em 2021. '
      + 'Em 2022 competindo pela escuderia Red Bull.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/max-verstappen/2022.jpg',
    cardAttr1: '67',
    cardAttr2: '18',
    cardAttr3: '15',
    cardRare: muitoRaro,
    cardTrunfo: false },
  { cardName: 'Sebastian Vettel',
    cardDescription: 'Sebastian Vettel, nascido em 03/07/1987 - Alemanha. '
      + 'Primeiro Grande Prémio: 2007. Campeão do Mundo em 2010, 2011, 2012 e 2013. '
      + 'Em 2022 competindo pela escuderia Aston Martin.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/sebastian-vettel/2022.jpg',
    cardAttr1: '90',
    cardAttr2: '38',
    cardAttr3: '57',
    cardRare: muitoRaro,
    cardTrunfo: false },
  { cardName: 'Guanyu Zhou',
    cardDescription: 'Guanyu Zhou, nascido em 30/05/1999 - China. '
      + 'Primeiro Grande Prémio: 2022. Melhor classificação em Campeonato Mundial: '
      + '16° em 2022. Em 2022 competindo pela escuderia Alfa Romeo.',
    cardImage: 'https://www.statsf1.com/photos/pilotes/galerie/guanyu-zhou/2022.jpg',
    cardAttr1: '0',
    cardAttr2: '0',
    cardAttr3: '0',
    cardRare: normal,
    cardTrunfo: false },
];

export default cardData;
