import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";
import { useFBX, useGLTF, SpotLight } from "@react-three/drei";

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { useState, useRef } from 'react';

const Model = ({path, scale, pos, rot}) => {
  const model = useGLTF(path);

  let mixer
  if (model.animations.length) {
      mixer = new THREE.AnimationMixer(model.scene);
      model.animations.forEach(clip => {
          const action = mixer.clipAction(clip)
          action.play();
      });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
  })

  model.scene.traverse(child => {
      if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
          child.material.side = THREE.FrontSide
      }
  })

  return (

    <primitive 
        object = {model.scene}
        scale = {scale}
        position = {pos}
        rotation = {rot}
        castShadow 
        receiveShadow 
    />

  )
}

function Marker() {
    const [ clicked, setClicked ] = useState(false);
    const markerRef = useRef();
    const vec = new THREE.Vector3();
    const vec2 = new THREE.Vector3();

    const markerRef2 = useRef();

    let xPosition = 1;
    let yPosition = 3;
    let zPosition = 0;

    vec.set(xPosition, yPosition, zPosition)
    vec2.set(0, 0, 4)

    const q = new THREE.Quaternion();
    q.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

    const q2 = new THREE.Quaternion();
    q2.setFromAxisAngle( new THREE.Vector3( 0, 0, 0 ), Math.PI / 2 );

    const target = THREE.MathUtils.degToRad(30);

    let first = true;
    let startTime = 0;
    let ogY = 0;

    let rotate = true;
    let x = 0;

    useFrame(state => {
        markerRef.current.rotation.x = state.clock.elapsedTime;

        if (clicked) {
            //state.camera.position.lerp(vec, 0.05)

            //state.camera.lookAt(markerRef.current.position); // markerRef.current.quaternion

            let x = 0;

            if(x < 1.0){
                state.camera.quaternion.slerp(q, x)
                x += 0.02;
            }
            
        }
        return null;
    })

    return (
        <group>

            <mesh position={[1, 1, 8]} ref = {markerRef} onClick = {() => setClicked(!clicked)}>
                <boxGeometry />
                <meshLambertMaterial attach = "material" color = "hotpink" />
            </mesh>

            <mesh position={[-1, 1, 8]} ref = {markerRef2}>
                <boxGeometry />
                <meshLambertMaterial attach = "material" color = "blue" />
            </mesh>

        </group>
    )
}

function Scene() {
    const policeFbx = useFBX('./models/gtpd.fbx');
    const wreckFbx = useFBX('./models/wreck.fbx');

    return (
        <Canvas style = {{height: "100vh", background: "#171717"}} >
            <OrbitControls />

            <fog attach="fog" args={['#202020', 5, 20]} />

            <pointLight position={[1, 1, 2.25]} intensity = {4} color = {"pink"}/>

            <Model
                path = {'./models/mon_crawl.gltf'} 
                scale = {4.0} 
                pos = {[-0.5,-1,8]}
                rot = {[0, -Math.PI / 28 ,0]}
            />

            <Model
                path = {'./models/astro_strut.gltf'} 
                scale = {12.0} 
                pos = {[3.0,-1,8]}
                rot = {[0, 0 ,0]}
            />

            <Model
                path = {'./models/robber_slide2.gltf'} 
                scale = {2.0} 
                pos = {[2.0,-1,2]}
                rot = {[0, -Math.PI / 3 ,0]}
            />

            <primitive object={policeFbx} position = {[-3,-1,8]} scale = {0.11} rotation={[0, Math.PI, 0]}/>
            <primitive object={wreckFbx} position = {[-4.5,-1,8]} scale = {0.11} rotation={[0, Math.PI, 0]}/>

            <Marker />

            <mesh receiveShadow position={[0, -1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[25, 15]} />
                <meshPhongMaterial />
            </mesh>

            <mesh receiveShadow position={[0, -6, 0]}>
                <planeGeometry args={[25, 25]} />
                <meshPhongMaterial />
            </mesh>

        </Canvas>
    );
}

export default Scene;