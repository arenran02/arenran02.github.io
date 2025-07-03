import React from "react";

export default function ProfileSection() {
  return (
    <section style={{ height: "80vh", padding: "2rem", color: "white" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>Minji's Portfolio</h1>
      <p>Hello! I'm Minji 🤗<br />돈까스와 도라에몽을 좋아해요 ...</p>
      <img
        src="assets/picture1.jpg"
        style={{ width: "200px", marginTop: "1rem", borderRadius: "1rem" }}
        alt="Profile"
      />
    </section>
  );
}