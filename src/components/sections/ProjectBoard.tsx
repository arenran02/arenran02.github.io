import "../style/ProjectBoard.css"


export default function ProjectBoard() {
  return (
    <section className="project-board">
      <h2>💡 Projects</h2>

      <h3>캡스톤 디자인 (2025-1) - AI 유실물 관리 시스템</h3>
      <p>
        경찰청 유실물 포털 Open API를 활용하여 데이터를 수집 및 정제하고,
        CLIP을 파인튜닝하여 유사한 물건 이름과 설명을 추출.
        DINOv2 벡터를 MongoDB에 저장하고 top-k 매칭 시스템 구축.
      </p>
      <a href="https://github.com/arenran02/Capstone-AI-app" target="_blank" rel="noreferrer">
        👉 GitHub Repository
      </a>
      <br />
      <img src="../assets/project1.png" alt="Capstone Project" style={{ maxWidth: "80%", margin: "1rem 0" }} />

      <h3>오픈소스SW개론 (2025-1) - RAG 기반 AI 챗봇 동아리 추천 시스템</h3>
      <p>
        Sentence Transformer를 사용해 동아리 정보 임베딩 후, FAISS 벡터 검색.
        GPT API를 통해 추천 동아리 및 이유 생성.
      </p>
      <a href="https://github.com/OpenSW-3341/ClubFinder.AI" target="_blank" rel="noreferrer">
        👉 GitHub Repository
      </a>
      <br />
      <img src="../assets/project2.png" alt="RAG Chatbot Project" style={{ maxWidth: "80%", margin: "1rem 0" }} />

      <h3>Apple Vision Pro 가구 이미지 3D 시뮬레이션 앱</h3>
      <p>
        가구 이미지를 3D 모델로 변환 후 Apple Vision Pro에서 실시간 조작.
        ARKit/RealityKit을 활용해 실제 공간 배치 기능 구현.
      </p>

      <h3>UnrealEngine 활용 프로젝트</h3>
      <p>
        Camera Actor를 활용한 뷰 캡처 및 데이터셋 구성.
        실시간 서버 전송, Vision Pro와 Unreal Engine 연동.
      </p>
    </section>
  );
}