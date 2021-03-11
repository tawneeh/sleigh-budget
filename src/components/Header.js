import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: red;
  text-align: center;
  color: white;
  border-radius: 10px;
  padding-bottom: 15px;
  padding-top: 25px;
`;

const StyledNav = styled.div`
  text-decoration: none;
  text-align: right;
  color: white;
  margin-right: 10px;
`;

function Header() {
  return (
    <>
      <StyledHeader>
        <h1>SleighBudget</h1>
        <h2><em>Slay the Season</em></h2>
          <StyledNav>
            <Link to="/" style={{color: "white", textDecoration: "none"}}>Home</Link>
            <br />
            <Link to="/signin" style={{color: "white", textDecoration: "none"}}>Account</Link>
          </StyledNav>
      </StyledHeader>

    </>
  );
}

export default Header;