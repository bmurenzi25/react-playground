import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    lightTheme: {
      background: '#d8ddf1',
      text: '#222',
    },
    darkTheme: {
      background: '#5c5c5c',
      text: '#fff',
    },
  };
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
          { this.props.children }
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
