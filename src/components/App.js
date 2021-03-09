import React from 'react';
import Header from './Header';
import GiftControl from './GiftControl';
import Signin from './Signin';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import { lightTheme, darkTheme } from './Themes.js';
import Toggle from './Toggler';
import { useDarkMode } from './useDarkMode';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './../App.css';

function App() {

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
        <Router>
          <Toggle theme={theme} toggleTheme={themeToggler} /> {/* this determines the toggle button location -- inline styling for placement?*/}
          <Header />
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