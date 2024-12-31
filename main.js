import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import nx from'./Skybox/nx.jpg'
import ny from'./Skybox/ny.jpg'
import nz from'./Skybox/nz.jpg'
import px from'./Skybox/px.jpg'
import py from'./Skybox/py.jpg'
import pz from'./Skybox/pz.jpg'

import { FBXLoader } from 'three/examples/jsm/Addons.js';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.BoxGeometry( 2, 6, 3 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.y = 5;



document.addEventListener('keydown', (event) => {
	const speed = 0.1;
	switch (event.key) {
		case 'w': // Di chuyển lên
			cube.position.z -= speed; // Di chuyển theo trục Z
			break;
		case 's': // Di chuyển xuống
			cube.position.z += speed; // Di chuyển theo trục Z
			break;
		case 'a': // Di chuyển trái
			cube.position.x -= speed; // Di chuyển theo trục X
			break;
		case 'd': // Di chuyển phải
			cube.position.x += speed; // Di chuyển theo trục X
			break;
	}
});

window.addEventListener('resize', () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});



const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    px,
	nx,
	//dinh
	py,
	//day
	ny,
	pz,
	nz,
]);



// create an AudioListener and add it to the camera
const listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'nhacnen/maintheme.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});






const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(6, 8, 14);
camera.lookAt(cube.position);

orbit.update();



// const light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 50, 50, 50 );
// scene.add( light );


const loader = new FBXLoader();
loader.load( 'phongtruyenthong.fbx', function ( map ) {
	map.castShadow=false;
    map.scale.set(0.1,0.1,0.1);
    map.position.y = 0,
	map.light
    scene.add( map );
} );


const groundGeo = new THREE.PlaneGeometry(30, 30);
const groundMat = new THREE.MeshDepthMaterial({});
const groundMesh = new THREE.Mesh(groundGeo, groundMat);
scene.add(groundMesh);
const groundPhysMat = new CANNON.Material();
const groundBody = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(15, 15, 0.1)),
    type: CANNON.Body.STATIC,
    material: groundPhysMat
});
world.addBody(groundBody);
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);







function animate() {
	requestAnimationFrame(animate);

	renderer.render( scene, camera );

}