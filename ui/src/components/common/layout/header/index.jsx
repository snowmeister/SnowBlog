/*
 * File: index.jsx
 * Project: SnowBlog-UI
 * File Created: Sunday, 14th August 2022 5:20:35 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Sunday, 14th August 2022 5:20:35 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */
import React from 'react'

export default function Header({color}) {
  return (
    <div className={`flex flex-row justify-center align-center p-4 text-3xl text-${color}-100 opacity-30`}>{process.env.REACT_APP_NAME}</div>
  )
}
