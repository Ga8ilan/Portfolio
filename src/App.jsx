import NavBar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects"
import ContactForm from "./components/contactform";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;