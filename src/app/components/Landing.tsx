const Landing = () => {
  return (
    <div className="h-screen text-white/90 font-[inter-bold] overflow-hidden mask-[linear-gradient(to_top,transparent,black_40%)] [-webkit-mask-image:linear-gradient(to_top,transparent,black_40%)]">
      <div className="relative min-h-screen w-full flex flex-col justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
        <nav className="absolute top-0 w-full flex items-center justify-between p-5 sm:px-30 sm:py-5 text-lg sm:text-2xl">
          <div className="flex items-center">
            <img src={"/logo.svg"} className="h-6 w-6 sm:h-8 sm:w-8"></img>
            <h1 className="pl-1">CreateHook</h1>
          </div>
          <button className="px-3 py-1 bg-white/30 hover:bg-white/20 transition-all duration-100 ease-in ">
            <a href="#generate" className="text-[15px] sm:text-xl font-[inter-regular]">
              Generate
            </a>
          </button>
        </nav>
        <header className="font-stretch-ultra-condensed flex flex-col items-center">
          <h1 className="px-2 text-5xl sm:text-[80px] mb-5 leading-none text-center tracking-tight font-[inter-bold]">
            Your<span className="font-[instrument]"> Vlog </span>is good.
            <br></br>But the<span className="font-[instrument]"> Hook </span>{" "}
            decides the<span className="font-[instrument]"> Views.</span>
          </h1>
          <h2 className="text-center text-md px-5 mb-5 sm:text-xl text-white/70">
            Get natural opening lines that makes the viewers stay past the first 3 seconds.
          </h2>
          <button className="px-4 py-2 bg-white/30 hover:bg-white/20 transition-all duration-100 ease-in ">
            <a href="#generate" className="text-xl font-[inter-regular]">
              Generate
            </a>
          </button>
        </header>
      </div>
    </div>
  );
};

export default Landing;
