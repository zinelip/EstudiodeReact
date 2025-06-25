import React, { useState } from "react";
import SearchInput from "./SearchInput";

const MusicPlayer = () => {
  const [track, setTrack] = useState(null);

  const fetchTrack = async ({ trackId, token }) => {
    console.log("Recibí el ID en MusicPlayer:", trackId);

    const res = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      alert("No se pudo cargar la canción.");
      return;
    }

    const data = await res.json();
    console.log("Datos de la canción:", data);

    setTrack({
      title: data.name,
      artist: data.artists[0].name,
      image: data.album.images[0].url,
    });
  };

  return (
    <div>
      <SearchInput onSubmit={fetchTrack} />
      {track && (
        <div style={styles.container}>
          <img src={track.image} alt={track.title} style={styles.image} />
          <div style={styles.text}>
            <h2 style={styles.title}>{track.title}</h2>
            <p style={styles.artist}>{track.artist}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    marginTop: "40px",
    textAlign: "center",
  },
  image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
  text: {
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: "5px",
  },
  artist: {
    fontSize: "18px",
    color: "#444",
  },
};

export default MusicPlayer;
