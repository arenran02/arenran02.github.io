import React from "react";
import "./ProfileSection.css"; // 필요한 경우 스타일 파일 따로 만들어 import

export default function ProfileSection() {
  return (
    <section className="profile-section">
      <h1>안녕하세요!</h1>
      <img src="assets/picture1.jpg" alt="profile" style={{ maxWidth: "250px", borderRadius: "8px" }} />
      <h2>김민지라고 합니다</h2>
      <p>돈가스와 도라에몽을 좋아해요 😊</p>

      <h3>🧑‍💻 About Me</h3>
        <div>
          <p>🎓 세종대학교 전자정보통신공학과 & 소프트웨어학과 복수전공</p>
          <p>🧑‍🎓 현재 4학년 재학 중</p>
          <p>🤖 CV, 백엔드 개발, 소프트웨어 공학 전반에 관심</p>
          <p>📫 arenran02@naver.com</p>
        </div>

        <h3>📖 Career</h3>
        <div>
          <p>2022.02 : 보평고 졸업</p>
          <p>2022.03 ~ : 세종대학교 전자정보통신공학과</p>
          <p>2024.03 ~ : 소프트웨어학과 복수전공</p>
          <p>2024.08 ~ 2025.02 : COSS IoT 서포터즈</p>
          <p>2024.01 ~ 2024.12 : 세콕세콕 배드민턴 동아리 임원</p>
          <p>2024.03 ~ 2024.12 : 프롬프트 학술동아리 임원</p>
          <p>2024.01 ~ 2025.01 : AISL Lab 학부 연구생</p>
        </div>
    </section>
  );
}