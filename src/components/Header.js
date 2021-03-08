import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: red;
  text-align: center;
  color: white;
  padding-bottom: 15px;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <h1>Welcome to SleighBudget!</h1>
        <h2><em>Slay the Season</em></h2>
      </StyledHeader>
          <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
    </>
  );
}

export default Header;