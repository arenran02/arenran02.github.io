import "../style/CareerBoard.css"

export default function CareerBoard() {
  return (
    <section className="career-board">
      <h2>🏆 Awards</h2>

      <h3>2025 제 12회 세종대학교 SW·AI 해커톤 - 은상 🥈</h3>
      <img src="../assets/picture3.jpg" alt="Hackathon Award" style={{ maxWidth: "80%", margin: "1rem 0" }} />

      <h2>💡 기타 경력</h2>
      <ul>
        <li>IoT 서포터즈, 학부 연구생 등 다양한 대외활동</li>
        <li>동아리 임원 및 학술 활동</li>
      </ul>
    </section>
  );
}