import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Menu from '../menu'
import bgImage from '../../assets/bgImage.jpeg';

const Header = () => {
  return (
    <div>
      <Menu></Menu>
      <HeaderImage src={bgImage}/>
    </div>
  );
};

const HeaderImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${bgImage});
  background-position: bottom -1px right -1px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default Header;