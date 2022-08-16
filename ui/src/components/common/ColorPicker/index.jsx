/*
 * File: index.js
 * Project: SnowBlog-UI
 * File Created: Tuesday, 16th August 2022 7:30:52 pm
 * Author: Mark Kennard (mark.kennard@gmail.com)
 * -----
 * Last Modified: Tuesday, 16th August 2022 7:30:53 pm
 * Modified By: Mark Kennard (mark.kennard@gmail.com>)
 * -----
 * Copyright 2022 - 2022 Mark Kennard
 */

import React from 'react';
// import ColorSwatch from '../ColorSwatch';



export default function ColorPicker() {
  const colors = process.env.REACT_APP_THEME_COLORS.split(',');

  return (
    <div className='absolute top-0 left-0 w-8 h-8 p-4'><ul>
      {colors.map((color, index) => {
        if (color !== 'current' && color !== 'tranparent') {
          console.log('color', color);
          return <li className={`block w-16 h-16 bg-${color}-900 p-3 border border-white  rounded-full shadow-lg m-2`} key={index}>{color}</li>
        }
        return null;
      })
      };
    </ul></div>
  )
}
