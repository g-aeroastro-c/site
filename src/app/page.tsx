import Footer from "@/components/footer";
import TechRev from "@/components/techrev";
import Body3 from "@/components/body3";
export default function Home() {
  return (
    <div className="grid grid-rows-[2px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      {/* <Hero /> */}
      <Body3 />
      <TechRev />
      <Footer />
    </div>
  );
}