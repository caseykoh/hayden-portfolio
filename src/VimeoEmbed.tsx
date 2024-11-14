import React from "react";

type VimeoEmbedProps = {
  videoId: string;
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId }) => {
  return (
    <div
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        height: 0,
        overflow: "hidden",
        maxWidth: "100%",
        // height: "auto",
      }}
    >
      <iframe
        src={`https://player.vimeo.com/video/${videoId}`}
        allow="autoplay; fullscreen"
        title="Vimeo Video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></iframe>
    </div>
  );
};

export default VimeoEmbed;
