import React, { Component } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(AuthContext) => (
          <ThemeContext.Consumer>
            {(themContext) => {
              const { isAuthenticated, toggleAuth } = AuthContext;
              const { isLightTheme, light, dark } = themContext;
              const theme = isLightTheme ? light : dark;
              return (
                <nav style={{ background: theme.ui, color: theme.syntax }}>
                  <h1>Context App</h1>
                  <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged in' : 'Logged out'}
                  </div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </ul>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
