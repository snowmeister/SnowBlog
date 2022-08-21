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
import { ThemeContext } from 'context/theme';


class Layout extends React.Component {


  render() {
    const { children } = this.props;
    return (
      <ThemeContext.Consumer>
        {({ currentColor, colorSelectedHandler }) => {
         return ( <>
          {
            currentColor !== null && <div className={`m-0 p-0 position-absolute w-full min-h-screen flex flex-col align-center h-full bg-${currentColor}-900`}>
              {process.env.REACT_APP_SHOW_HEADER === 'true' && <Header currentColor={currentColor} clickHandler={colorSelectedHandler} />}
              <div className={`flex flex-row  grow mx-auto justify-center flex items-center justify-center h-full p-4 text-${currentColor}-100 `}>{children}</div>
              {process.env.REACT_APP_SHOW_FOOTER === 'true' && <Footer currentColor={currentColor} />}
            </div>
          }
          </>)
        }
        }</ThemeContext.Consumer>
    )
  }
}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Layout