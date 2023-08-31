import { useRef } from 'react';

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function lerp( a, b, alpha ) {
    return a + alpha * (b - a);
}

function LightsAndCamera({sceneNumber, thumbnailsLoaded, screenSize}){
    const homeVec = new THREE.Vector3();
    const aboutVec = new THREE.Vector3();
    const artVec = new THREE.Vector3();
    const csVec = new THREE.Vector3();
    const musicVec = new THREE.Vector3();

    artVec.set(50,15,5);

    const swapSpeed = 0.05;
    const lightSpeed = 0.014;

    const landingLight = useRef();
    const aboutLight = useRef();
    const artLight = useRef();
    const csLight = useRef();
    const musicLight = useRef();

    let timer = 0;
    const timeBeforeLight = 0.9;

    const minIntensity = 0.135;
    const maxIntensity = 4;

    useFrame(state => {
        if(screenSize === 'xs'){
            homeVec.set(1.05, 0.1, 7);
            aboutVec.set(25.5,1.25,13);
            csVec.set(74.15,-0.15,5);
            musicVec.set(100.85,0.4,7);
        } else if(screenSize === 'sm') {
            homeVec.set(0.6,0.15,6.5);
            aboutVec.set(25.5,0.5,11);
            csVec.set(74.4,-0.15,5);
            musicVec.set(101.025,0.7,5.5);
        } else if(screenSize === 'md'){
            homeVec.set(0.4,0.25,5.5);
            aboutVec.set(25.5,0.3,10.5);
            csVec.set(74.6,-0.15,5);
            musicVec.set(100.3,0.7,5.5);
        } else if (screenSize === 'lg'){
            aboutVec.set(25.25,0.25,10);
            csVec.set(74.85,-0.1,5);
            musicVec.set(100.25,0.4,5);
        } else {
            homeVec.set(0,0.25,5);
            aboutVec.set(25,0.25,10);
            csVec.set(75,-0.05,5);
            musicVec.set(100,0.4,5);
        }

        function handleSceneChange( vector, light ) {
            state.camera.position.lerp(vector, swapSpeed);
            if(light !== artLight || (thumbnailsLoaded)){
                timer += 1/60;
                if(timer >= timeBeforeLight || light === landingLight){
                    light.current.intensity = lerp(light.current.intensity, maxIntensity, lightSpeed)
                }
                if(light.current.intensity >= maxIntensity){
                    timer = 0;
                }
            }
        }

        // Modify Art Camera depending on if pictures are loaded
        if (thumbnailsLoaded){
            artVec.set(50,0.25,5);
        }

        // Handle Scene Change
        if (sceneNumber === 0){
            handleSceneChange(homeVec, landingLight)
        } else if(sceneNumber === 1){
            handleSceneChange(aboutVec, aboutLight)
        } else if(sceneNumber === 2){
            handleSceneChange(artVec, artLight)
        } else if(sceneNumber === 3){
            handleSceneChange(csVec, csLight)
        } else if(sceneNumber === 4){
            handleSceneChange(musicVec, musicLight)
        }
        return null;
    })

    return (
        <group>
            <pointLight
                ref = {landingLight}
                position={[1, 1, 2.25]}
                intensity = {minIntensity}
                color = {"#f792bc"}
                castShadow
                shadow-mapSize-height={512}
                shadow-mapSize-width={512}
            />
            <pointLight
                ref = {aboutLight}
                position={[25,1,8]}
                intensity = {minIntensity}
                color = {"#6dd2ed"}
                distance = {30}
            />
            <pointLight
                ref = {artLight}
                position={[50,1,3]}
                intensity = {minIntensity}
                color = {"#754bd6"}
            />
            <pointLight
                ref = {csLight}
                position={[74.5,0.4,4]}
                intensity = {minIntensity}
                color = {"#ba5050"}
                distance = {30}
            />
            <pointLight
                ref = {musicLight}
                position={[100.8,1,3.6]}
                intensity = {minIntensity}
                color = {"#b4c8cf"}
                distance = {30}
            />
        </group>
    );
}

export default LightsAndCamera;