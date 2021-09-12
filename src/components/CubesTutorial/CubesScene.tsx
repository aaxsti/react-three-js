import {FC} from 'react';
import {Canvas} from "@react-three/fiber";
import Cube from "./Cube";

const CubesScene: FC = () => {
    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[5, 5, 5]}/>
            <Cube position={[-5, 0, 0]}/>
            <Cube position={[5, 0, 0]}/>
        </Canvas>
    );
}

export default CubesScene;
