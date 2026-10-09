import Navigation from "@/components/ui/shared/Navigation-bar/navigation";

export default function Home() {
  return (
    <main>
      <section
        className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('../public/hero.jpg')",
        }}
      >
        <Navigation />

        
      </section>
    </main>
  );
}
