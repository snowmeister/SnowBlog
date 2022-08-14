import React, { Component } from 'react';
import './App.css';
import Layout from 'components/common/layout';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express })).then(() => {
        console.info('we have the data');
        console.log(this.state.data);
      })
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
    return (
      <Layout>
      
       
        <p>{this.state.data}</p>
      
      </Layout>
    );
  }
}

export default App;
