import { Plane } from "@react-three/drei";

function GradientPlane() {
  return (
    <Plane args={[30, 100]} position={[-15, 0, 0]} rotation={[0, 0, 0]}>
      <meshBasicMaterial
        attach="material"
        transparent
        opacity={0.7}
        color="black"
      />
    </Plane>
  );
}