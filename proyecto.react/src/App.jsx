import React, { useState } from "react";
import SearchInput from "./components/SearchInput";

function App() {
  const [spotifyUrl, setSpotifyUrl] = useState(null);

  const handleSpotifyUrl = (url) => {
    setSpotifyUrl(url);
    console.log("URL recibida:", url);
    // Aquí después vamos a extraer el ID y llamar a la API
  };

  const appStyle = {
    height: "100vh", // altura completa viewport
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={appStyle}>
      {!spotifyUrl && <SearchInput onSubmit={handleSpotifyUrl} />}
      {/* Después aquí va el reproductor */}
    </div>
  );
}

export default App;
