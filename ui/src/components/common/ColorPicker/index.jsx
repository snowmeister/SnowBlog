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
// import ColorSwatch from '../ColorSwatch';


export default function ColorPicker({colorSelectedHandler, currentColor}) {
  const colors = process.env.REACT_APP_THEME_COLORS.split(',');

  return (
    <div className={`absolute top-0 left-0 h-full p-4 pt-8 bg-${currentColor}-100 z-40`}><ul>
      {colors.map((color, index) => {
        if (color !== 'current' && color !== 'black' && color !== 'transparent') {
          return <li data-color={color} onClick={() => {
            console.log('color', color);
            colorSelectedHandler(color);
          }} className={`block w-4 h-4  bg-${color}-900 border border-${color}-900  rounded-sm shadow m-2 cursor-pointer`} key={index}></li>
        }
        return null;
      })
      };
    </ul></div>
  )
}
