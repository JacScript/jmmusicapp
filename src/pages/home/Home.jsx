import React from 'react'
import Navbar from '../../components/navbar-component/Navbar';

import './Home.styles.css';
import Content from '../../components/content/Content';
import TrendingSongList from '../../components/trendingsonglist/TrendingSongList';

const Home = () => {
  return (
    <div  className='home'>
        <Navbar />
        <div className='mainContainer'>
           <Content />
           <TrendingSongList />
        </div>
    </div>
  )
}

export default Home