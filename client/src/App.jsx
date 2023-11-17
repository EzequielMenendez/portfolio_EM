import AboutMe from "./components/AboutMe/AboutMe"
import Certificates from "./components/Certificates/Certificates"
import NavBar from "./components/NavBar/NavBar"
import Proyects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Welcome from "./components/Welcome/Welcome"

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <AboutMe />
      <Skills />
      <Certificates />
      <Proyects />
    </>
  )
}

export default App
