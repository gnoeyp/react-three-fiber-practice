import { Canvas } from '@react-three/fiber'
import Box from './Box'

const App = () => {
  return (
    <div
      style={{
        height: '100%'
      }}
    >
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>,
    </div>
  )
}

export default App
