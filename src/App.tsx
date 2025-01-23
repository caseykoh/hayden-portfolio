import "./App.css";
import VimeoEmbed from "./VimeoEmbed";

function App() {
  return (
    <>
      <main className="p-0 w-full bg-slate-400 h-full" id="work">
        <br />
        <div className="relative">
          <h1 className="z-30 absolute top-[-2vw] md:top-[-6vw] whitespace-nowrap text-[18vw] md:text-[15vw] lg:text-[18vw] tracking-tighter w-full text-center font-sans font-medium text-white">
            [Hayden Koh]
          </h1>
        </div>

        <div className="mt-24 md:mt-[6vw] bg-black pb-[100rem] mx-0 md:mx-32">
          <div className="flex p-5 md:p-10 text-white uppercase font-sans text-xs gap-x-5">
            <span className="cursor-pointer">Work</span>
            <span className="cursor-pointer md:ml-auto opacity-50 md:hover:opacity-100 md:transition-opacity md:duration-500 md:ease-in-out">
              Contact
            </span>
          </div>
          <div className="flex flex-col gap-36">
            <div className="md:px-10 pt-0">
              <VimeoEmbed videoId="1049511616" />
            </div>
            <div className="md:px-10 pt-0">
              <div className="relative max-w-full">
                <div className="top-[75%] opacity-40 leading-none whitespace-nowrap absolute left-72 text-[20vw] md:text-[10vw] lg:text-[7vw] tracking-tighter w-full font-sans font-semibold text-white p-2 pointer-events-none z-20">
                  Arcteryx
                </div>

                <div className="lg:max-w-[400px]">
                  {/*  md:pt-[133.33%] lg:pt-[50%] lg:w-[40%] lg:max-w-[470px] lg:pt-[52.6%]*/}
                  <div className="pt-[177.78%] relative overflow-hidden">
                    <iframe
                      src={`https://player.vimeo.com/video/1030377835?title=0&byline=0&portrait=0`}
                      allow="autoplay; fullscreen"
                      title="Vimeo Video"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
