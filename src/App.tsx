import "./App.css";
import VimeoEmbed from "./VimeoEmbed";

function App() {
  return (
    <>
      <div className="relative bg-slate-400 py-[16vw]" id="work">
        <h1 className="absolute top-[-6vw] whitespace-nowrap text-[25vw] md:text-[15vw] lg:text-[18vw] tracking-tighter w-full text-center font-sans font-medium text-white">
          [Hayden Koh]
        </h1>
        <div className="mx-0 pb-12 md:mx-32 md:pb-24 min-h-screen relative z-3">
          <div className="absolute inset-0 bg-black"></div>
          <div className="relative z-10">
            <div className="opacity-100">
              <div className="flex px-5 pt-5 md:p-10 text-white uppercase font-sans text-xs gap-x-5">
                <span className="cursor-pointer">Work</span>
                <span className="cursor-pointer opacity-50 md:hover:opacity-100 md:transition-opacity md:duration-500 md:ease-in-out">
                  CV
                </span>
                <span className="cursor-pointer md:ml-auto opacity-50 md:hover:opacity-100 md:transition-opacity md:duration-500 md:ease-in-out">
                  Contact
                </span>
              </div>
            </div>
            <div>
              <div className="px-5 md:px-10 pt-0">
                <VimeoEmbed
                  videoId="479379963"
                  videoTitle="Arcteryx Veilance"
                />
                <div className="md:pt-10 pt-5 text-gray-500 ">
                  <span className="font-sans text-sm tracking-wider uppercase">
                    &rarr; Director of Photography
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
