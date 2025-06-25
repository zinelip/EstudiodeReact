import React from "react";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const appStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={appStyle}>
      <MusicPlayer />
    </div>
  );
}

export default App;
