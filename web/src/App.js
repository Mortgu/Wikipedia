import './resources/app.scss';
import { useEffect } from 'react';

import * as THREE from 'three';

export default function App() {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

  
  camera.position.z = 5;
  
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild( renderer.domElement );
  }, []);

  return (
    <>
    </>
  );
}
