import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;