import Hero from "@/components/hero";
import Leaders from "@/components/leaders";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div className="grid grid-rows-[2px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 font-[family-name:var(--font-geist-sans)]"    >
      {/* Hero Section */}
      <div
        style={{
          marginRight: "120px"
        }}
      >
        <Hero />
      </div>
      <div>
        <Leaders />
      </div>
      <div>
        <Contact />
      </div>
      <h1>Footer</h1>
    </div>
  );
}