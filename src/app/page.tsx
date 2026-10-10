import Hero from "@/components/ui/shared/Hero-section/hero";
import Navigation from "@/components/ui/shared/Navigation-bar/navigation";

export default function Home() {
  return (
    <main>
      <section
        className="relative flex h-screen w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="relative z-10">
          <Navigation />
        </div>
        <iframe
          title="Decorative 3D hero background"
          src="https://my.spline.design/untitled-E5XuxMYAtGXw4Oso6cmlRJq3/"
          className="absolute inset-0 z-0 h-full w-full border-0"
        />
        <Hero />
      </section>
    </main>
  );
}
