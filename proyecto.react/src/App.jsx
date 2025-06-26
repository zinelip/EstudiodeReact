import React, { useState } from "react";
import StartScreen from "./components/StartScreen";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div style={{ height: "100vh", backgroundColor: "#2e104d" }}>
      {hasStarted ? (
        <MusicPlayer />
      ) : (
        <StartScreen onConfirm={() => setHasStarted(true)} />
      )}
    </div>
  );
}

export default App;
