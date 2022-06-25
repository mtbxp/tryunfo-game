import React from 'react';
import Name from './inputsComponents/Name';
import Attributes from './inputsComponents/Attributes';
import Image from './inputsComponents/Image';
import Rare from './inputsComponents/Rare';
import Trunfo from './inputsComponents/Trunfo';
import Submit from './inputsComponents/Submit';
import Description from './inputsComponents/Description';

class Form extends React.Component {
  render() {
    return (
      <section>
        <Name />
        <Attributes />
        <Description />
        <Image />
        <Rare />
        <Trunfo />
        <Submit />
      </section>
    );
  }
}

export default Form;
