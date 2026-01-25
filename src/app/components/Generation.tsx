const Generation = () => {
  return <div id="generate" className="min-h-screen w-full text-white/90 flex items-center justify-center font-[inter-regular]">
    <form action="" className="border w-[90%] sm:w-[50%]">
    <input
            type="text"
            placeholder="What happened in today's vlog"
            name="name"
            className="flex h-9 w-full rounded-sm border border-zinc-800 bg-background px-3 py-2 mb-3 text-foreground shadow-sm shadow-black/5 transition-shadow placeholder:text-muted-foreground/70 focus-visible:border-[#0F3858] focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
          />
    </form>
  </div>;
};

export default Generation;
