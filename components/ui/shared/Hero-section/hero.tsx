"use client";

function Hero() {
  return (
    <section className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
      <div className="pointer-events-auto flex flex-col items-center gap-8 px-6 text-center">
        <h1 className="w-full max-w-3xl text-6xl leading-tight font-bricolage text-[#01161E]">
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
            className="rounded-full border border-[#01161E]/60 bg-white/20 px-6 py-3 shadow-[0_8px_32px_rgba(15,23,42,0.12)] backdrop-blur-2xl backdrop-saturate-150 font-public font-semibold text-[#01161E] transition hover:bg-white/40"
          >
            Discover Nexora
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
