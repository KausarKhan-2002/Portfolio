import Header from "./components/header/Header";
import Home from "./components/Home";
import About from "./components/About-me/About";
import Contact from "./components/Contact";
import ProjectsContainer from "./components/Projects/ProjectsContainer";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Toaster } from "react-hot-toast";

// Website to choose blob background: https://app.haikei.app/

function App() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Home />
        <Marquee />
        <About />
        <ProjectsContainer />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
