export default function Overlay() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 10,           // ✅ 다른 요소보다 위에
        pointerEvents: "none", // ✅ 클릭 이벤트는 차단
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        padding: "1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", textShadow: "0 0 10px #000" }}>
        Minji's Portfolio
      </h1>
      <p style={{ marginTop: "1rem", maxWidth: "400px" }}>
        안녕하세요! ✨ 프론트엔드 개발자 Minji입니다.  
        우주처럼 무한한 가능성을 담아 멋진 웹을 만듭니다!
      </p>
      <a
        href="mailto:minji@example.com"
        style={{
          marginTop: "2rem",
          padding: "0.75rem 2rem",
          backgroundColor: "white",
          color: "black",
          borderRadius: "9999px",
          fontWeight: "bold",
          textDecoration: "none",
          pointerEvents: "auto", // ✅ 버튼은 클릭 가능
        }}
      >
        연락하기
      </a>
    </div>
  );
}