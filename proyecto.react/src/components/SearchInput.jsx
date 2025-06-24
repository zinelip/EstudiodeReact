import React, { useState } from "react";

const SearchInput = ({ onSubmit }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.includes("spotify.com/track/")) {
      alert("Por favor, pega un enlace válido de una canción de Spotify.");
      return;
    }
    onSubmit(url);
    setUrl("");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>¿Qué quieres escuchar?</label>
        <input
          type="text"
          placeholder="Pega aquí el enlace de Spotify"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={styles.input}
        />
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    // marginTop eliminado para centrar verticalmente
  },
  form: {
    backgroundColor: "#ddd",
    padding: "20px",
    borderRadius: "20px",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  input: {
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "15px",
    border: "none",
    width: "300px",
  },
};

export default SearchInput;
