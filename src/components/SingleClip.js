import React from "react";
import "./SingleClip.css"

const SingleCLip = ({ clip, onClipSelect }) => {
  return (
    <div className="clip item" onClick={() => onClipSelect(clip)}>
      <img className="ui image" src={clip.snippet.thumbnails.medium.url} alt="" />
      <div className="content">
        <div className="header">{clip.snippet.title}</div>
      </div>
    </div>
  );
};

export default SingleCLip;
