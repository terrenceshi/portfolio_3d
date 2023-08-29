import { useRef } from 'react';

import Model from "./Model.js"
import LightsAndCamera from "./LightsAndCamera.js"

import { Canvas, useFrame } from '@react-three/fiber'
import { useFBX } from "@react-three/drei";
import * as THREE from 'three'
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing'
import { BlurPass, Resizer, KernelSize, Resolution } from 'postprocessing'

function Scene({sceneNumber, thumbnailsLoaded}) {
    function RotatingBox({position, rotation, color}) {
        const box = useRef()
        useFrame(({ clock }) => {
            box.current.rotation.x = clock.getElapsedTime()
          })
        return (
            <mesh ref={box} position = {position} rotation = {rotation}>
                <boxGeometry />
                <meshNormalMaterial color={color} />
            </mesh>
        )
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

            <LightsAndCamera sceneNumber = {sceneNumber} thumbnailsLoaded = {thumbnailsLoaded}/>

            <ambientLight color = {"cyan"} intensity = {0.03}/>

            {/* Ground and Wall(s) */}

            <mesh receiveShadow position={[50, -1, 0]} rotation-x={-Math.PI / 2}>
                <planeGeometry args={[140, 20]} />
                <meshPhongMaterial />
            </mesh>

            <mesh receiveShadow position={[50, -1, 0]}>
                <planeGeometry args={[140, 40]} />
                <meshPhongMaterial />
            </mesh>

            {/* Landing Page Scene */}

            <Model
                path = {'./models/robber_slide2.gltf'} 
                scale = {2.0} 
                pos = {[2.0,-1,2]}
                rot = {[0, -Math.PI / 3 ,0]}
            />

            {/* About Page Scene */}

            {/*<fog attach="fog" color="#9ecfd9" near={-8} far={50} />*/}

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

            {/* Art */}

            <RotatingBox 
                position={[50,15.1,2]}
                rotation={[0, 0, 0]}
                color = {"white"}
            />

            {/* CS */}

            <Model
                path = {'./models/mon_crouch.gltf'} 
                scale = {2} 
                pos = {[73.5,-1,3]}
                rot = {[0, Math.PI / 6 ,0]}
            />

            {/* Music */}

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