import React from "react";

const SingleClipDetail = ({ clip }) => {
  if(!clip) {
    return <div>Waiting for content to be loaded...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{clip.snippet.title}</h4>
        <p>{clip.snippet.description}</p>
      </div>
    </div>
  )
};

export default SingleClipDetail;
