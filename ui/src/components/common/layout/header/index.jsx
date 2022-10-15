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
import React from 'react';
import ColorPicker from 'components/common/ColorPicker';

export default function Header({currentColor, clickHandler}) {

  return (<>
    <ColorPicker currentColor={currentColor} colorSelectedHandler={(currentColor)=>{
      clickHandler(currentColor);
    }}  />
    <div className={`flex flex-row justify-center border-${currentColor}-100 align-center p-4 text-5xl text-${currentColor}-100 opacity-80`}>{process.env.REACT_APP_NAME} </div>
    <small className={`text-${currentColor}-100 uppercase opacity-60 p-4 absolute right-0 font-bold text-lg`}>{currentColor}</small>
  </>
    
  )
}
