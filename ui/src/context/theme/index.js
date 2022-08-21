/*
 * File: index.js
 * Project: SnowBlog
 * File Created: Saturday, 3rd April 2021 8:16:11 pm
 * Author: Mark Kennard (mark@snowmeister.co.uk)
 * -----
 * Last Modified: Saturday, 3rd April 2021 8:16:11 pm
 * Modified By: Mark Kennard (mark@snowmeister.co.uk>)
 * -----
 * Copyright 2018 - 2021 Mark Kennard AKA Snowmeister
 */


import React from 'react';

export const ThemeContext = React.createContext();

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);


    this.toggleFullscreen = () => {
      const { isFullScreen } = this.state;
      this.setState(() => {
        return { isFullScreen: !isFullScreen }
      });
    };

    this.colorSelectedHandler = (currentColor) => {
      this.setState(() => {
        return { currentColor }
      });
    };

    /**
     * Set the state up with default theme color from the .env file, and our fullscreen state.
     */
    this.state = {
      colors: process.env.REACT_APP_THEME_COLORS.split(','),
      toggleFullscreen: this.toggleFullscreen,
      isFullScreen: false,
      currentColor: null,
      colorSelectedHandler: this.colorSelectedHandler
    };
  }

  componentDidMount() {

    /**
     * Lets setup the initial theme state, based on defaults in the ENV file.
     */
    const arrColors = process.env.REACT_APP_THEME_COLORS.split(',');
    const currentColor = arrColors[process.env.REACT_APP_DEFAULT_THEME_INDEX];
    /**
     * Pass our selected default theme color to the state.
     */
    this.setState({currentColor});
  }

  render() {
    return <ThemeContext.Provider value={this.state}> {this.props.children} </ThemeContext.Provider>;
  }
}

export default ThemeProvider;
