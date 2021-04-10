import React from 'react';
import styled from 'styled-components'

import { Link } from 'react-router-dom'


const Menu = () => {
  return (
    <div>
      <Link to="#">Femmes</Link>
      <Link to="#">Hommes</Link>
      <Link to="#">Enfants</Link>
      <Link to="#">Maison</Link>
      <Link to="#">A propos</Link>
      <Link to="#">Notre plateforme</Link>
    </div>
  );
};

const StyledSpan = styled.span`
  color: green;
  margin-bottom: 12px;
`

export default Menu;