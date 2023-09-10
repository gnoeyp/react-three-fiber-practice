import { useRef, useState } from "react"
import { MeshProps, useFrame } from "@react-three/fiber"
import { Mesh } from "three"

const Box = (props: MeshProps): React.ReactElement => {
  const ref = useRef<Mesh>(null)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box
