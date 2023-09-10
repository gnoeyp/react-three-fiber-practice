import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import TransformableMesh from './TransformableMesh'


function App() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1000} />
      <pointLight position={[-10, -10, -10]} intensity={1000} />
      <TransformableMesh position={[-1.2, 0, 0]} />
      <TransformableMesh position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}

export default App
