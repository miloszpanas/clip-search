import React from "react";
import SingleClip from "./SingleClip";

const ClipsList = ({ clips }) => {
  const renderedList = clips.map(clip => {
    return <SingleClip clip={clip} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>
};

export default ClipsList;