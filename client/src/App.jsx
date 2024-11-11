import Experience from "./components/Experience/Experience"
import Certificates from "./components/Certificates/Certificates"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import Proyects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Welcome from "./components/Welcome/Welcome"

function App() {
  return (
    <>
      <NavBar />
      <Welcome />
      <Experience />
      <Skills />
      <Certificates />
      <Proyects />
      <Footer />
    </>
  )
}

export default App
