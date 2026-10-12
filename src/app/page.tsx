import Hero from "@/components/ui/shared/Hero-section/hero";
import Navigation from "@/components/ui/shared/Navigation-bar/navigation";

export default function Home() {
  return (
    <main>
      <section
        className="hero relative flex h-screen w-full flex-col overflow-hidden"
      >
        <div className="relative z-20">
          <Navigation />
        </div>
        <Hero />
      </section>
    </main>
  );
}
