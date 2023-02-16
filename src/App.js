import "./App.css";

import BlurBgAnimation from "./components/BlurBgAnimation";
import NeonLightHover from "./components/NeonLightHover";

function App() {
  return (
    <div className="App">
      <h1>Cool CSS animation collection</h1>
      <div className="animationsContainer">
        <BlurBgAnimation />
        <NeonLightHover/>
      </div>
    </div>
  );
}

export default App;
