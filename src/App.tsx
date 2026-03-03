import { Header } from "./pages/Header";
import { About } from "./pages/sections/About";
import { Hero } from "./pages/sections/Hero";
import { Projects } from "./pages/sections/Projects";
import { Experience } from "./pages/sections/Experiences";
import { Technologies } from "./pages/sections/Technologies";
import { Contact } from "./pages/sections/contacts";
import { Footer } from "./pages/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
