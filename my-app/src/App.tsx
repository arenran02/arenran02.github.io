import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Galaxy from "./components/Galaxy";
import Overlay from "./components/Overlay";
import { useRef, useState } from "react";
import * as THREE from "three";

function AnimatedCamera({ onFinish }: { onFinish: () => void }) {
  const { camera } = useThree();
  const targetPosition = new THREE.Vector3(5000, 5000, 5000);
  const hasArrived = useRef(false);

  useFrame(() => {
    if (hasArrived.current) return;

    camera.position.lerp(targetPosition, 0.06);

    if (camera.position.distanceTo(targetPosition) < 10) {
      camera.position.copy(targetPosition);
      hasArrived.current = true;
      onFinish(); // ✅ 애니메이션 종료 시 콜백 실행
    }
  });

  return null;
}

function App() {
  const [controlsEnabled, setControlsEnabled] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        camera={{
          position: [20000, 20000, 20000],
          far: 100000,
        }}
      >
        <AnimatedCamera onFinish={() => setControlsEnabled(true)} />
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={5} />
        <OrbitControls enabled={controlsEnabled} />
        <Galaxy />
      </Canvas>
      <Overlay />
    </div>
  );
}

export default App;