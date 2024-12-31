import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Tạo cảnh, camera và renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Thêm ánh sáng vào cảnh
const light = new THREE.AmbientLight(0x404040, 10); // Ánh sáng mềm
scene.add(light);

const directionalLight = new THREE.DirectionalLight(0xffffff, 10); // Ánh sáng mềm
scene.add(directionalLight);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Tạo GLTFLoader
const loader = new GLTFLoader();

// Tải mô hình GLB
loader.load('models/phone/phone.glb', (gltf) => {
    scene.add(gltf.scene);
    gltf.scene.position.set(0, 0, 0); // Đặt vị trí mô hình
    gltf.scene.scale.set(10, 10, 10);
    console.log(gltf);
}, undefined, (error) => {
    console.error('An error occurred:', error);
});



//xoay quanh vật thể 
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Bật hiệu ứng giảm chấn
controls.dampingFactor = 0.25; // Hệ số giảm chấn


// Thiết lập camera
camera.position.z = 5;


// Vòng lặp hoạt hình
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
// const listener = new THREE.AudioListener();
// camera.add(listener);
// const sound = new THREE.Audio(listener);
// const audioLoader = new THREE.AudioLoader();
// audioLoader.load('models/phone/phone.mp3', function (buffer) {
// 	sound.setBuffer(buffer);
// 	sound.setLoop(true);
// 	sound.setVolume(0.5);
// 	sound.play();
// });
// Xử lý thay đổi kích thước cửa sổ
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});