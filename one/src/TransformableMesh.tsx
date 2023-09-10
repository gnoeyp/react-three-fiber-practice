import { useRef, useState } from "react"
import { MeshProps, useFrame } from "@react-three/fiber"
import { Mesh } from "three"

const GEOMETRY_TYPES = ['box', 'sphere', 'cone', 'torus', 'torus-knot'] as const

const TransformableMesh = (props: MeshProps): React.ReactElement => {
  const ref = useRef<Mesh>(null)
  const [hovered, hover] = useState(false)
  const [geometryType, setGeometryType] = useState<typeof GEOMETRY_TYPES[number]>('box')

  const handleClick = () => {
    setGeometryType(GEOMETRY_TYPES[(GEOMETRY_TYPES.indexOf(geometryType) + 1) % GEOMETRY_TYPES.length])
  }

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta
  })

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={handleClick}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={() => hover(false)}
    >
      {
        geometryType === 'box' && <boxGeometry args={[1, 1, 1]} />
      }
      {
        geometryType === 'sphere' && <sphereGeometry args={[0.5, 32, 32]} />
      }
      {
        geometryType === 'cone' && <coneGeometry args={[0.5, 1, 32]} />
      }
      {
        geometryType === 'torus' && <torusGeometry args={[0.5, 0.2, 32, 32]} />
      }
      {
        geometryType === 'torus-knot' && <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
      }
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default TransformableMesh
