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
        <h1>SleighBudget</h1>
        <h2><em>Slay the Season</em></h2>
      </StyledHeader>
        <ul style={{listStyleType: "none"}}>
          <li>
            <Link to="/" style={{color: "red", textDecoration: "none"}}>Home</Link>
          </li>
          <li>
            <Link to="/signin" style={{color: "red", textDecoration: "none"}}>Account</Link>
          </li>
        </ul>
    </>
  );
}

export default Header;