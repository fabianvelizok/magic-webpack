import React, { Component } from 'react';

import platziImage from '../../images/platzi.png';
import makeImage from '../makeImage';
const logo = makeImage(platziImage);

class Header extends Component {
  render () {
    return (
      <div className="logo" ref={(nodeElement) => { nodeElement.appendChild(logo) }}></div>
    )
  }
}

export default Header;

