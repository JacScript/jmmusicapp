import React from "react";
import{ GoPlus  } from "react-icons/go";
import "./TrendingSongList.styles.css";
import { SongData } from "./SongData";
import CustomButton from "../customButton/CustomButton";

const TrendingSongList = () => {
  return (
    <div className="trendingContainer">
      <div className="container">
        <h2>Trending Songs</h2>
        <div className="songs">
          {SongData
           .filter((item,idx) => idx < 5)
          .map((item, index) => {
            return (
                 <button key={index} className="songItem"><p><span>{item.title} by </span> <span className="artist">{item.artsist}</span></p> <div><GoPlus/> </div></button>
        
            )
          })
          }
           </div>
           <div className="buttonContainer">
        <CustomButton className="moreBtn"> View more</CustomButton>
           </div>
      </div>
    </div>
  );
};


export default TrendingSongList;
