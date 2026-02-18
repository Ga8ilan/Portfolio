import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects"
import ContactForm from "./components/contactform";
import Contact from "./components/contact"

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;