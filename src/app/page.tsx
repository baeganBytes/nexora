import Hero from "@/components/ui/shared/Hero-section/hero";
import Navigation from "@/components/ui/shared/Navigation-bar/navigation";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex h-screen w-full flex-col overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 z-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"
        />
        <iframe
          title="Interactive Spline hero scene"
          src="https://my.spline.design/untitled-E5XuxMYAtGXw4Oso6cmlRJq3/"
          className="absolute inset-0 z-10 h-full w-full border-0 bg-transparent"
        />
        <div className="relative z-20">
          <Navigation />
        </div>
        <Hero />
      </section>
    </main>
  );
}
