import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Galaxy from "./components/Galaxy";
import Overlay from "./components/Overlay";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Canvas
        camera={{
          position: [10000, 10000, 10000],
          rotation: [-0.5, 0, 0],
          far: 100000,
        }}
      >
        <color attach="background" args={["#000"]} />
        <ambientLight intensity={5} />
        <OrbitControls />
        <Galaxy />
      </Canvas>
      <Overlay />
    </div>
  );
}

export default App;