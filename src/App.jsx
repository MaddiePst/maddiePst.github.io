import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import Experience from "./components/Experience.jsx";
import Work from "./components/Work.jsx";
// import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      {/* Ambient holographic backdrop */}
      <div className="bg-field" aria-hidden="true" />
      <div className="bg-grid-overlay" aria-hidden="true" />
      <div className="orb w-[420px] h-[420px] -top-32 -left-28 bg-holo-violet" aria-hidden="true" />
      <div className="orb w-[360px] h-[360px] top-[30%] -right-36 bg-holo-cyan [animation-delay:-6s]" aria-hidden="true" />
      <div className="orb w-[320px] h-[320px] -bottom-28 left-[30%] bg-holo-magenta [animation-delay:-12s]" aria-hidden="true" />

      <Header />
      <main>
        <Hero />
        <TechStack />
        <Experience />
        <Work />
        {/* <About /> */}
      </main>
      <Footer />
    </>
  );
}