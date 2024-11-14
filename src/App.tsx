import "./App.css";

function App() {
  return (
    <>
      <div className="relative bg-slate-400 py-[16vw]" id="work">
        <div className="group absolute top-[-6vw]">
          <h1 className="whitespace-nowrap text-[25vw] md:text-[15vw] lg:text-[18vw] tracking-tighter w-full text-center font-sans font-medium text-white">
            [Hayden Koh]
          </h1>
          <div className="absolute hidden group-hover:block bg-white text-black text-xs rounded p-2 top-full left-1/2 transform -translate-x-1/2 -translate-y-14 z-10">
            Cinematographer and Camera Assistant based in Toronto, Canada.
          </div>
        </div>
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
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
