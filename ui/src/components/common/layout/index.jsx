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
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="m-0 p-0 position-absolute w-full min-h-screen flex flex-col align-center h-full w-full bg-slate-600 font-light">
      <Header />
      <div className='flex flex-row mx-auto justify-center flex items-center justify-center h-full text-slate-100 p-4'>{children}</div>
      <Footer />
    </div>
      )
}
