import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';

const Button = styled.button` {/* can make this button an icon instead of a reg button using styled-components!!! jack-o-lantern! */}
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`;

const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Button onClick={toggleTheme} >
          Switch Theme
        </Button>
    );
};
Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;