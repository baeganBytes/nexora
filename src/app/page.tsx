import Hero from "@/components/ui/shared/Hero-section/hero";
import Navigation from "@/components/ui/shared/Navigation-bar/navigation";
import SplineScene from "@/components/ui/shared/Hero-section/spline-scene";

export default function Home() {
  return (
    <main>
      <section
        className="hero relative flex h-screen w-full flex-col overflow-hidden"
      >
        <SplineScene />
        <div className="relative z-20">
          <Navigation />
        </div>
        <Hero />
      </section>
    </main>
  );
}
