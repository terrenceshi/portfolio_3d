import { useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three'

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
            //child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })
  
    return (
      <primitive 
          object = {model.scene}
          scale = {scale}
          position = {pos}
          rotation = {rot}
      />
    )
  }

  export default Model;