/*
 * File: index.jsx
 * Project: SnowBlog-UI
 * File Created: Sunday, 14th August 2022 5:21:28 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Sunday, 14th August 2022 5:21:29 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */
import Footer from './footer';
import Header from './header';
import PropTypes from 'prop-types'
import React from 'react';


class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      color: null
    };  
  }

  componentDidMount() {
    const {color} = this.props
  
    this.setState(()=>{
      return {color}
    });
    // document.body.classList.add(color)
  }


  render() {
    const {children} = this.props;
    const {color} = this.state;
    return (
     <>
      {color !== null &&  <div className={`m-0 p-0 position-absolute w-full min-h-screen flex flex-col align-center h-full bg-${color}-900`}>
     {process.env.REACT_APP_SHOW_HEADER ==='true' && <Header color={color} />}
      <div className={`flex flex-row  grow mx-auto justify-center flex items-center justify-center h-full p-4 text-${color}-100 `}>{children}</div>
      {process.env.REACT_APP_SHOW_FOOTER ==='true' && <Footer color={color} />}
    </div>}
     </>
    )
  }
}

Layout.defaultProps = {
  color: 'white'
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}
export default Layout