import React, { useState } from "react";

const SearchInput = ({ onSubmit }) => {
  const [url, setUrl] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token.trim()) {
      alert("Por favor, ingresa tu token de Spotify.");
      return;
    }

    const match = url.match(/spotify\.com\/(?:[\w-]+\/)?track\/([a-zA-Z0-9]+)/);
    if (!match) {
      alert("Por favor, pega un enlace válido de una canción de Spotify.");
      return;
    }

    const trackId = match[1];
    onSubmit({ trackId, token });
    setUrl("");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Token de Spotify</label>
        <input
          type="text"
          placeholder="Tu token de acceso"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          style={styles.input}
        />
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
