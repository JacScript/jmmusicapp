import React from 'react';
import CustomButton from '../customButton/CustomButton';

import './Content.styles.css';

function Content() {
  return (
    <div className='contentContainer'>
      <div className='contentPanel'>
        <h1 className='contentHeading'>Make Your Party Fun!</h1>
        <p>Create your own custom playlist today</p>
        <CustomButton >Create playlist</CustomButton>
      </div>
    </div>
  )
}

export default Content