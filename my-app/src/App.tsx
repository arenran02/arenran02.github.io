import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls, Scroll } from "@react-three/drei";
import Galaxy from "./components/Galaxy";
import { useRef, useState } from "react";
import * as THREE from "three";
import ProfileSection from "./components/ProfileSection";
import ProjectBoard from "./components/ProjectBoard";
import GuestbookBoard from "./components/GuestbookBoard";
import CareerBoard from "./components/CareerBoard";

function AnimatedCamera({ onFinish }: { onFinish: () => void }) {
  const { camera } = useThree();
  const targetPosition = new THREE.Vector3(2000, 2000, 2000);
  const hasArrived = useRef(false);

  useFrame(() => {
    if (hasArrived.current) return;

    camera.position.lerp(targetPosition, 0.06);

    if (camera.position.distanceTo(targetPosition) < 10) {
      camera.position.copy(targetPosition);
      hasArrived.current = true;
      onFinish();
    }
  });

  return null;
}

export default function App() {
  const [controlsEnabled, setControlsEnabled] = useState(false);

  return (
    <Canvas
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  }}
  camera={{
    position: [20000, 20000, 20000],
    far: 100000,
  }}
>
  {/* ✅ 애니메이션 카메라 */}
  <AnimatedCamera onFinish={() => setControlsEnabled(true)} />
  <color attach="background" args={["#000"]} />
  <ambientLight intensity={5} />
  <OrbitControls enabled={controlsEnabled} enableZoom={false} /> 
  <Galaxy />

  {/* ✅ ScrollControls (글자 영역) */}
  <ScrollControls pages={4} damping={0.3}>
    <Scroll html>
      <section style={{ height: '100vh' }}>
        <ProfileSection />
      </section>
      <section style={{ height: '100vh' }}>
        <ProjectBoard />
      </section>
      <section style={{ height: '100vh' }}>
        <GuestbookBoard />
      </section>
      <section style={{ height: '100vh' }}>
        <CareerBoard />
      </section>
    </Scroll>
  </ScrollControls>
</Canvas>
  );
}