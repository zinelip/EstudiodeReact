import { useEffect } from "react";

export default function MusicPlayer() {
  useEffect(() => {
    window.open(
      "https://music.youtube.com/playlist?list=PLzy2UMqbNzHW_BNfMoyxD3z-8gi-BLCD-&si=R31YU9GIvWY_6YrV",
      "_blank"
    );
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Enjoy your playlist 🎶</h1>
      <p style={styles.text}>We opened it in a new tab for you.</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#1b0f2f",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    color: "#ccc",
  },
};
