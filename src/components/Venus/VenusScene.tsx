import {FC} from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";

const VenusScene: FC = () => {
    const gltf = useLoader(GLTFLoader, './scene.gltf')

    return (
        <mesh>
            <primitive object={gltf.scene} scale={0.17}/>
        </mesh>
    )
}

export default VenusScene;
