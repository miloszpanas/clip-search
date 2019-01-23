import React from "react";

const SingleClipDetail = ({ clip }) => {
  if(!clip) {
    return <div>Loading...</div>;
  }

  const clipSRC = `https://www.youtube.com/embed/${clip.id.videoId}`

  return (
    <div>
    <div className="ui embed">
      <iframe src={clipSRC} title={clipSRC}/>
    </div>
      <div className="ui segment">
        <h4 className="ui header">{clip.snippet.title}</h4>
        <p>{clip.snippet.description}</p>
      </div>
    </div>
  )
};

export default SingleClipDetail;
