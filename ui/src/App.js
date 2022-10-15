import React, { Component } from 'react';

import Layout from 'components/common/layout';

import ThemeProvider from 'context/theme';
/**
 * This is the main aPPlication component. Everything is rendered here.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // Any initial state data goes here. Null until its loaded
      data: null,
      // We have a bunch of theme colors to choose from in the .env file - REACT_APP_THEME_COLORS
      theme_colors: process.env.REACT_APP_THEME_COLORS.split(','),
      // And we have a current color, the default is set from the .env file (REACT_APP_DEFAULT_THEME_INDEX), then the user can change it
      current_color: process.env.REACT_APP_DEFAULT_THEME_INDEX
    };
  }



  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/images/colors/red');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const { data } = this.state;
    console.log('we have the data', data);
    return (
      <ThemeProvider>
        {data !== null && <Layout><p>{this.state.data.content.color}</p></Layout>}
      </ThemeProvider>
    );
  }
}

export default App;
