import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <h1>Welcome to SleighBudget!</h1>
      <h3><em>Slay the Season</em></h3>
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