import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Home />
        <About />
        <Services />
        <Contact />
      </main>
    </>
  );
}

export default App;
