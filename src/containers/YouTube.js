import React from "react";
export const YouTube = props => {
  let videoSrc =
    "https://www.youtube.com/embed/" +
    props.video +
    "?autoplay=" +
    props.autoplay +
    "&rel=" +
    props.rel +
    "&modestbranding=" +
    props.modest;
  return (
    <iframe
      className="player"
      type="text/html"
      width="100%"
      height="100%"
      src={videoSrc}
      frameborder="0"
      title="abc"
      allow="autoplay"
      allowfullscreen
    />
  );
};
