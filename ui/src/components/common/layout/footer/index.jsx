/*
 * File: index.jsx
 * Project: SnowBlog-UI
 * File Created: Sunday, 14th August 2022 5:20:05 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Sunday, 14th August 2022 5:20:05 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */
import React from 'react';


export default function Footer() {
  return (
    <footer className='mt-auto flex flex-row justify-center align-center text-slate-100 p-4'><div className="text-sm">{process.env.REACT_APP_NAME} -  <span className='opacity-50'>Content Copyright &copy;</span> {new Date().getFullYear()} <strong> {process.env.REACT_APP_SITE_CONTENT_OWNER}</strong> - <span className='opacity-50'>Powered by</span> SnowBlog</div></footer>
  )
}
