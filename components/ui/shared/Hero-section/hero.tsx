

function Hero() {
  return (
    <section className="flex min-h-0 flex-1 items-center justify-center">
      <div className="flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="w-full max-w-3xl text-7xl leading-tight font-bricolage text-[#01161E]">
          Where digital becomes permanent.
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#collection"
            className="rounded-full bg-[#01161E] px-6 py-3 font-public font-semibold text-white transition hover:bg-[#01161E]/85"
          >
            Explore Collection
          </a>
          <a
            href="#about"
            className="rounded-full border border-[#01161E]/60 bg-white/25 px-6 py-3 font-public font-semibold text-[#01161E] shadow-lg backdrop-blur-xl transition hover:bg-white/40"
          >
            Discover Nexora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero