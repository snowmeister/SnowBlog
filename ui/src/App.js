import React, { Component } from 'react';

import Layout from 'components/common/layout';

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
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const { current_color, theme_colors, data } = this.state;
    
    return (
      <>
        {data !== null && <Layout color={theme_colors[current_color].trim()}><p>{this.state.data}</p></Layout>}
      </>
    );
  }
}

export default App;
