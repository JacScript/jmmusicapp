import React from 'react';
import './Content.styles.css';

function Content() {
  return (
    <div className='content-container'>
      <div className='content-panel'>
        <h1 className='contentHeading'>Make Your Party Fun!</h1>
        <p>Create your own custom playlist today</p>
        <button className='playlistbtn'>Create playlist</button>
      </div>
    </div>
  )
}

export default Content