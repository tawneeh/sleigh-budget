import React, { useState } from 'react';
import Header from './Header';
import GiftControl from './GiftControl';
import Signin from './Signin';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './../App.css';

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
        <Router>
          <Header />
          <button onClick={themeToggler}>Nightmare Before Christmas Mode</button>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <GiftControl />
            </Route>
          </Switch>
        </Router>
    </ThemeProvider>
  );
}

export default App;