type VimeoEmbedProps = {
  videoId: string;
  videoTitle: string;
};

const VimeoEmbed: React.FC<VimeoEmbedProps> = ({ videoId, videoTitle }) => {
  return (
    <div className="relative max-w-full">
      <div className="opacity-40 whitespace-nowrap absolute top-52 left-3 text-[20vw] md:text-[10vw] lg:text-[10vw] tracking-tighter w-full font-sans font-semibold text-white p-2 pointer-events-none z-20">
        {videoTitle}
      </div>

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
    </div>
  );
};

export default VimeoEmbed;
