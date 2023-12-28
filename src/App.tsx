import Competences from "./components/competences";
import Contact from "./components/contact";
import Presentation from "./components/presentation";
import Project from "./components/project";
import Welcome from "./components/welcome";

function App() {
  return (
    <>
      <Welcome></Welcome>
      <Presentation></Presentation>
      <Competences></Competences>
      <Project></Project>
      <Contact></Contact>
    </>
  );
}

export default App;
