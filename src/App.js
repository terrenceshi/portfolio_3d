import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

import { useFBX } from "@react-three/drei";

function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach = "geometry" />
      <meshLambertMaterial attach = "material" color = "hotpink" />
    </mesh>
  );
}

function App() {

  const monsterFbx = useFBX('./models/mon.fbx');

  const astroFbx = useFBX('./models/atest5.fbx');

  const robberFbx = useFBX('./models/test.fbx');
  
  return (
    <div>
      <Canvas style = {{height: "100vh", background: "#171717"}}>
        <OrbitControls />
        <ambientLight intensity={0.5}/>
        <directionalLight position={[1, 1, 3]}/>

        <primitive object={monsterFbx} position = {[-1.5,-1,0]} scale = {0.03}/>
        <primitive object={astroFbx} position = {[1.5,-1,0]} scale = {0.11}/>
        <primitive object={robberFbx} position = {[0,-1,0]} scale = {0.02}/>

        <mesh position={[1, 1, -1]}>
          <boxGeometry />
          <meshLambertMaterial attach = "material" color = "hotpink" />
        </mesh>

      </Canvas>
    </div>
  );
}

export default App;
