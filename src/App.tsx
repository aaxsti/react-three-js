import './App.css';
import {FC, Suspense} from 'react'
import VenusScene from "./components/Venus/VenusScene";
import {Canvas} from "@react-three/fiber";
import {CameraShake, Environment, OrbitControls, OrthographicCamera} from "@react-three/drei";

const config = {
    maxYaw: 0.1, // Max amount camera can yaw in either direction
    maxPitch: 0.1, // Max amount camera can pitch in either direction
    maxRoll: 0.1, // Max amount camera can roll in either direction
    yawFrequency: 1, // Frequency of the the yaw rotation
    pitchFrequency: 1, // Frequency of the pitch rotation
    rollFrequency: 1, // Frequency of the roll rotation
    intensity: 0.2, // initial intensity of the shake
    decay: false, // should the intensity decay over time
    decayRate: 0.65, // if decay = true this is the rate at which intensity will reduce at
    additive: false, // this should be used when your scene has orbit controls
}

const App: FC = () => {
    return (
        <div className="app">
            {/*<div className="headerBlock">*/}
            {/*    <h1>Hello</h1>*/}
            {/*</div>*/}
            <Canvas camera={{fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}>
                <Suspense fallback={null}>
                    <VenusScene/>
                    <OrbitControls enablePan={false}/>
                    {/*<CameraShake {...config} />*/}
                    <ambientLight intensity={0.8} color={'#6da5ff'}/>
                    <directionalLight position={[15, 2, 3]}/>
                    {/*<Environment preset="park" background/>*/}
                </Suspense>
            </Canvas>
        </div>
    )
}

export default App;
