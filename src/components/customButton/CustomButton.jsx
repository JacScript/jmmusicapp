import React from 'react';

import './CustomButton.styles.css';

const CustomButton = ({ children, ...otherProps }) => {
  return (
    < button className='customButton' {...otherProps}>
          {children}
         </button>
     )
}

export default CustomButton;