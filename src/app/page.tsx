import Hero from "@/components/hero";
import Footer from "@/components/footer";
export default function Page() {
  return (
    <div className="grid grid-rows-[2px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <Hero />
      <Footer />

    </div>
  );
}
