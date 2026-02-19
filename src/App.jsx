import NavBar from "./components/navbar_fix";
import About from "./components/about";
import Projects from "./components/projects"
import Contact from "./components/contact"
import "./App.css"

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;