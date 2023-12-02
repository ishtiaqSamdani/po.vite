import { useState, useEffect } from "react";
import Menu from "./Components/Menu/Menu";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState((prevState) => !prevState);
  };

  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    const handleScroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    const navSmoothScrolling = () => {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    navSmoothScrolling();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Menu toggleMenu={toggleMenu} showMenu={menuState} />
      <Nav toggleMenu={toggleMenu} showMenu={menuState} />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
