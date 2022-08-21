/*
 * File: index.jsx
 * Project: SnowBlog-UI
 * File Created: Tuesday, 16th August 2022 7:38:50 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Tuesday, 16th August 2022 7:38:50 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */


import React from 'react'

export default function ColorSwatch({color, width, height}) {
  
  return (
   <div className={`m-2 p-2  border`} >
     <svg width={width} height={height}>
    <rect x={0} y={0} fill="currentColor" className={`bg-${color}-900`} width={width} height={height} />

  </svg>
   </div>
  )
}
