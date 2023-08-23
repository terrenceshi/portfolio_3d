import Model from "./Model.js"

import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX, OrbitControls } from "@react-three/drei";
import * as THREE from 'three'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

function Scene({sceneNumber}) {
    function SceneController(){
        const homeVec = new THREE.Vector3();
        const aboutVec = new THREE.Vector3();
        const artVec = new THREE.Vector3();
        const csVec = new THREE.Vector3();
        const musicVec = new THREE.Vector3();

        homeVec.set(0,0.25,5);
        aboutVec.set(25,0.25,10);
        artVec.set(50,0.25,5);
        csVec.set(75,0,5);
        musicVec.set(100,0.4,5);

        const swapSpeed = 0.05;

        useFrame(state => {
            if (sceneNumber === 0){
                state.camera.position.lerp(homeVec, swapSpeed);
            } else if(sceneNumber === 1){
                state.camera.position.lerp(aboutVec, swapSpeed);
            } else if(sceneNumber === 2){
                state.camera.position.lerp(artVec, swapSpeed);
            } else if(sceneNumber === 3){
                state.camera.position.lerp(csVec, swapSpeed);
            } else if(sceneNumber === 4){
                state.camera.position.lerp(musicVec, swapSpeed);
            }
            return null;
        })

        return (
            <group/>
        );
    }

    const policeFbx = useFBX('./models/gtpd.fbx');
    const wreckFbx = useFBX('./models/wreck.fbx');

    return (
        <Canvas 
            style = {{height: "100vh", background: "#171717", zIndex: -100, position: "absolute"}}
            camera = {{position: [0,0.25,5]}}
            shadows
            onCreated={(state) => {
                state.camera.rotation.set(THREE.MathUtils.degToRad(-5), 0, 0);

            }}
        >
            <SceneController />
            {/*<OrbitControls />*/}

            <pointLight
                position={[50,1,5]}
                intensity = {4}
                color = {"#7b55d4"}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <ambientLight color = {"cyan"} intensity = {0.03}/>

            {/* Ground and Wall(s) */}

            <mesh receiveShadow position={[50, -1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[140, 20]} />
                <meshPhongMaterial />
            </mesh>

            <mesh receiveShadow position={[50, -1, 0]}>
                <planeGeometry args={[140, 20]} />
                <meshPhongMaterial />
            </mesh>

            {/* Landing Page Scene */}

            <pointLight
                position={[1, 1, 2.25]}
                intensity = {4}
                color = {"#f792bc"}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <Model
                path = {'./models/robber_slide2.gltf'} 
                scale = {2.0} 
                pos = {[2.0,-1,2]}
                rot = {[0, -Math.PI / 3 ,0]}
            />

            {/* About Page Scene */}

            {/*<fog attach="fog" color="#9ecfd9" near={-8} far={50} />*/}

            <pointLight
                position={[25,1,8]}
                intensity = {4}
                color = {"#6dd2ed"}
                distance = {30}
            />

            {/*
            <pointLight
                position={[23,0, 5.5]}
                intensity = {1}
                color = {"red"}
                distance = {2}
            />

            <spotLight
                position={[30,1,8]}
                intensity = {4}
                color = {"yellow"}
                angle = {Math.PI/4}
                decay = {1.5}
            />
            */}

            <primitive
                object={policeFbx} 
                position = {[23.75,-1, 5.5]} 
                scale = {0.11} 
                rotation={[0, THREE.MathUtils.degToRad(220), 0]}
            />

            <primitive
                object={wreckFbx}
                position = {[26,-1,8]}
                scale = {0.11}
                rotation={[0, THREE.MathUtils.degToRad(210), 0]}
            />

            {/* CS */}

            <pointLight
                position={[75,1,5]}
                intensity = {4}
                color = {"#f05972"}
                distance = {30}
            />

            <Model
                path = {'./models/mon_crouch.gltf'} 
                scale = {2} 
                pos = {[74,-1,3]}
                rot = {[0, Math.PI / 8 ,0]}
            />

            {/* Music */}

            <pointLight
                position={[100,1,5]}
                intensity = {4}
                color = {"#d1e9f0"}
                distance = {30}
            />

            <Model
                path = {'./models/astro_strut.gltf'} 
                scale = {8.0} 
                pos = {[101.75,-1,2.75]}
                rot = {[0, -Math.PI / 6 ,0]}
            />

        </Canvas>
    );
}

export default Scene;