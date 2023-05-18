import React from "react";
import{ GoPlus  } from "react-icons/go";
import "./TrendingSongList.styles.css";
import { SongData } from "./SongData";

const TrendingSongList = () => {
  return (
    <div className="trendingContainer">
      <div className="container">
        <h2>Trending Songs</h2>
        <div className="songs">
          {SongData.map((item, index) => {
            return (
                 <button key={index} className="song-item"><p><span>{item.title} by </span> <span className="artist">{item.artsist}</span></p> <div><GoPlus/> </div></button>
        
            )
          })
          }
           </div>
        <button className="more-btn"> View more</button>
      </div>
    </div>
  );
};


export default TrendingSongList;
