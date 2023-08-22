import { useState, useRef } from 'react';

import Model from "./Model.js"

import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX, OrbitControls } from "@react-three/drei";
import * as THREE from 'three'
import { Bloom } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

function Scene({sceneNumber, setSceneNumber}) {
    function SceneController(){
        const homeVec = new THREE.Vector3();
        const aboutVec = new THREE.Vector3();
        const artVec = new THREE.Vector3();
        const csVec = new THREE.Vector3();
        const musicVec = new THREE.Vector3();

        homeVec.set(0,0.25,5);
        aboutVec.set(15,0.25,5);
        artVec.set(30,0.25,5);
        csVec.set(45,0.25,5);
        musicVec.set(60,0.25,5);

        const swapSpeed = 0.05;

        useFrame(state => {
            if (sceneNumber == 0){
                state.camera.position.lerp(homeVec, swapSpeed);
            } else if(sceneNumber == 1){
                state.camera.position.lerp(aboutVec, swapSpeed);
            } else if(sceneNumber == 2){
                state.camera.position.lerp(artVec, swapSpeed);
            } else if(sceneNumber == 3){
                state.camera.position.lerp(csVec, swapSpeed);
            } else if(sceneNumber == 4){
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
            style = {{height: "100vh", background: "#171717"}}
            camera = {{position: [0,0.25,5]}}
            shadows
            onCreated={(state) => {
                state.camera.rotation.set(THREE.MathUtils.degToRad(-5), 0, 0);

            }}
        >
            <SceneController />
            {/*<OrbitControls />*/}

            {/*<fog attach="fog" color="#3142b0" near={-4} far={12} />*/}

            <pointLight
                position={[1, 1, 2.25]}
                intensity = {4}
                color = {"#f792bc"}
                castShadow // highlight-line
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />

            <ambientLight color = {"cyan"} intensity = {0.03}/>

            {/* Ground and Wall(s) */}

            <mesh receiveShadow position={[40, -1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[120, 15]} />
                <meshPhongMaterial />
            </mesh>

            <mesh receiveShadow position={[40, -1, 0]}>
                <planeGeometry args={[120, 10]} />
                <meshPhongMaterial />
            </mesh>

            {/* Models */}

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

        </Canvas>
    );
}

export default Scene;