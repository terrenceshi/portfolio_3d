import { useRef } from 'react';

import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function lerp( a, b, alpha ) {
    return a + alpha * (b - a);
}

function lerpColor( color, rgb, alpha ) {
    var colorR = color.r;
    var colorG = color.g;
    var colorB = color.b;

    var outR = colorR + alpha * (rgb[0] - colorR);
    var outG = colorG + alpha * (rgb[1] - colorG);
    var outB = colorB + alpha * (rgb[2] - colorB);
    return {isColor: true, r: outR, g: outG, b: outB}
}

function LightsAndCamera({sceneNumber, thumbnailsLoaded, screenSize, audioPlaying}){
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

    const red = [237/255, 19/255, 41/255];
    const yellow = [222/255, 158/255, 49/255];
    const green = [19/255, 237/255, 114/255];
    const blue = [19/255, 114/255, 237/255];
    const purple = [55/255, 19/255, 237/255];
    const pink = [201/255, 19/255, 237/255];
    const colors = [red,yellow, green, blue, purple, pink];
    const gray = [180/255, 200/255, 207/255];
    let colorIdx = Math.floor(Math.random() * colors.length);
    let colorTimer = 0;
    const colorSwapTime = 0.75;
    const colorLerpSpeed = 0.025;

    useFrame(state => {
        if(screenSize === 'xs'){
            homeVec.set(1.05, 0.1, 7);
            aboutVec.set(25.5,1.25,13);
            csVec.set(74.6,0,6.5);
            musicVec.set(100.85,0.85,7.25);
        } else if(screenSize === 'sm') {
            homeVec.set(0.6,0.15,6.5);
            aboutVec.set(25.5,0.5,11);
            csVec.set(74.4,-0.05,5.75);
            musicVec.set(100.7,0.85,6);
        } else if(screenSize === 'md'){
            homeVec.set(0.4,0.25,5.5);
            aboutVec.set(25.5,0.3,10.5);
            csVec.set(74.75,-0.05,5.5);
            musicVec.set(100.1,0.775,5.75);
        } else if (screenSize === 'lg'){
            homeVec.set(0,0.25,5);
            aboutVec.set(25.25,0.25,10);
            csVec.set(74.5,-0.05,5);
            musicVec.set(99.9,0.6,5.25);
        } else {
            homeVec.set(0,0.25,5);
            aboutVec.set(25,0.25,10);
            csVec.set(74.75,-0.05,5);
            musicVec.set(99.75,0.525,5);
        }

        if(audioPlaying){
            musicLight.current.color = lerpColor(musicLight.current.color, colors[colorIdx], colorLerpSpeed);
        } else {
            musicLight.current.color = lerpColor(musicLight.current.color, gray, colorLerpSpeed);
        }

        colorTimer += 1/60;
        if(colorTimer >= colorSwapTime){
            colorIdx + 1 === colors.length ? colorIdx = 0 : colorIdx += 1;
            colorTimer = 0;
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
                color = {"#484761"}
            />
            <pointLight
                ref = {csLight}
                position={[74.5,0.4,4]}
                intensity = {minIntensity}
                color = {"#de314a"}
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