import NavBar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Projects from "./components/projects.jsx"
import ContactForm from "./components/contactform.jsx";
import Contact from "./components/contact.jsx"

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