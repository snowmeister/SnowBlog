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


/**
 * 
 * @param { colorSelectedHandler } FUNCTION colorSelectedHandler - function to call when a color is selected
 * @param { currentColor } STRING currentColor - the current color - 
 *  
 * @returns { JSX } - JSX - the component to be rendered
 */
export default function ColorPicker({ colorSelectedHandler, currentColor }) {
  const colors = process.env.REACT_APP_THEME_COLORS.split(',');

  return (
    <div className={`absolute top-0 left-0 h-full p-4 pt-8 bg-${currentColor}-100 z-40`}><ul>
     {/* Walk over our array of colors and generate an HTML LIST, with a click handler... */}
      {colors.map((color, index) => {
        if (color !== 'current' && color !== 'transparent' && color !== 'black') {
          return <li
            title={color}
            data-color={color} 
            onClick={() => {
              colorSelectedHandler(color);
            }} 
            className={`block w-12 h-4  bg-${color}-500 border border-white  rounded-sm shadow m-2 cursor-pointer`}
            key={index}>{color}</li>
        }
        return null;
      })
      };
    </ul></div>
  )
}
