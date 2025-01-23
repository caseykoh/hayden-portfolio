import "./VideoEmbed.css";

type VimeoEmbedProps = {
  videoId: string;
  videoTitle?: string;
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, videoTitle }) => {
  return (
    <div className="relative max-w-full">
      {/* <div className="scroll-in-title opacity-0 whitespace-nowrap absolute left-3 text-[20vw] md:text-[10vw] lg:text-[10vw] tracking-tighter w-full font-sans font-semibold text-white p-2 pointer-events-none z-20">
        {videoTitle}
      </div> */}

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
          src={`https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`}
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
    </div>
  );
};

export default VimeoEmbed;
