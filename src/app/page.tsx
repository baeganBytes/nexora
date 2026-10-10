import Hero from "@/components/ui/shared/Hero-section/hero";
import Navigation from "@/components/ui/shared/Navigation-bar/navigation";

export default function Home() {
  return (
    <main>
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <Navigation />
        <Hero />
      </section>
    </main>
  );
}
