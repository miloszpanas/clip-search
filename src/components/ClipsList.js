import React from "react";
import SingleClip from "./SingleClip";

const ClipsList = ({ clips, onClipSelect }) => {
  const renderedList = clips.map((clip) => {
    return <SingleClip onClipSelect={onClipSelect} clip={clip} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ClipsList;
