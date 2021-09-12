import {FC, useRef, useState} from 'react';
import * as THREE from "three";
import {useFrame} from "@react-three/fiber";

const Cube: FC<any> = (props: JSX.IntrinsicElements['mesh']) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame(() => (ref.current.rotation.x += 0.05))

    return (
        <mesh
            {...props}
            ref={ref}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}>
            <boxGeometry args={[2, 2, 2]}/>
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}

export default Cube;
