import ScrollBar  from "./components/ScrollBar";
import Nav         from "./components/Nav";
import Hero        from "./components/Hero";
import About       from "./components/About";
import Dashboard   from "./components/Dashboard";
import CaseStudies from "./components/CaseStudies";
import Skills      from "./components/Skills";
import Knowledge   from "./components/Knowledge";
import Timeline    from "./components/Timeline";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#05080f", minHeight: "100vh" }}>
      <ScrollBar />
      <Nav />
      <Hero />
      <About />
      <Dashboard />
      <CaseStudies />
      <Skills />
      <Knowledge />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}
