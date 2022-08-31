import Navbar from "./Components/Navbar";
import "./App.css";
import Intro from "./Components/Introduction/Intro";
import AboutMe from "./Components/AbotMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Qualification from "./Components/Qualification/Qualification";
import ContactMe from "./Components/Contact/ContactMe";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Qualification />
      <ContactMe />
      <Footer />
    </div>
  );
}
export default App;
