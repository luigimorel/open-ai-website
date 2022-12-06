import CTA from "../components/call-to-action";
import Footer from "../components/footer";
import Hero from "../components/hero";
import ImageBackground from "../components/image-background";
import Navbar from "./../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <CTA />

      <ImageBackground />

      <Footer />
    </>
  );
}
