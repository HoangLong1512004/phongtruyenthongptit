import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import nx from './Skybox/nx.jpg';
import ny from './Skybox/ny.jpg';
import nz from './Skybox/nz.jpg';
import px from './Skybox/px.jpg';
import py from './Skybox/py.jpg';
import pz from './Skybox/pz.jpg';
import { PointerLockControls } from 'three/examples/jsm/Addons.js'
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { FBXLoader } from 'three/examples/jsm/Addons.js';
import { Break } from 'three/webgpu';
import { bool } from 'three/webgpu';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);
//note 1
// document.getcomponent.appendChild(renderer.domElement)
//cube block
// const geometry1 = new THREE.BoxGeometry(30, 12, 35);
// const material1 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
// const cubes = [];
// cube1.position.z = -65;

const geometry1 = new THREE.BoxGeometry(30, 12, 35);
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry1, material1);
cube1.position.set(0, 3, -5);
cube1.visible = false;
cube1.position.z = -65;
scene.add(cube1);


const geometry2 = new THREE.BoxGeometry(200, 80, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.visible = false;
cube2.position.set(0, 3, -50);
cube2.position.z = 120;
scene.add(cube2);


const geometry3 = new THREE.BoxGeometry(35, 80, 89);
const material3 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.set(0, 3, -50);
cube3.position.x = 135;
cube3.visible = false;
cube3.position.z = 21;
scene.add(cube3);

const geometry4 = new THREE.BoxGeometry(200, 80, 1);
const material4 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube4 = new THREE.Mesh(geometry4, material4);
cube4.position.set(0, 3, -50);
cube4.position.x = 240;
cube4.visible = false;
cube4.position.y = 10;
cube4.position.z = 235;
scene.add(cube4);


const geometry5 = new THREE.BoxGeometry(1, 80, 200);
const material5 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube5 = new THREE.Mesh(geometry5, material5);
cube5.position.set(0, 3, -50);
cube5.position.x = 325;
cube5.position.z = 150;
cube5.visible = false;
scene.add(cube5);

const geometry6 = new THREE.BoxGeometry(1, 80, 120);
const material6 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube6 = new THREE.Mesh(geometry6, material6);
cube6.position.set(0, 3, -50);
cube6.position.x = 122;
cube6.position.z = 172;
scene.add(cube6);
cube6.visible = false;
cube6.rotation.y = Math.PI / 6; // Xoay 45 độ quanh trục X


const geometry7 = new THREE.BoxGeometry(10, 80, 80);
const material7 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube7 = new THREE.Mesh(geometry7, material7);
cube7.position.set(0, 3, -50);
cube7.position.x = 115;
cube7.position.z = 100;
scene.add(cube7);
cube7.visible = false;
cube7.rotation.y = Math.PI / -6;


const geometry8 = new THREE.BoxGeometry(50, 80, 10);
const material8 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube8 = new THREE.Mesh(geometry8, material8);
cube8.position.set(0, 3, -50);
cube8.position.x = 313;
cube8.visible = false;
cube8.position.z = 113;
scene.add(cube8);



const geometry9 = new THREE.BoxGeometry(50, 80, 190);
const material9 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube9 = new THREE.Mesh(geometry9, material9);
cube9.position.set(0, 3, -50);
cube9.position.x = 320;
cube9.visible = false;
cube9.position.z = -60;
scene.add(cube9);



const geometry10 = new THREE.BoxGeometry(70, 80, 190);
const material10 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube10 = new THREE.Mesh(geometry10, material10);
cube10.position.set(0, 3, -50);
cube10.position.x = 270;
cube10.visible = false;
cube10.position.z = -250;
scene.add(cube10);



const geometry11 = new THREE.BoxGeometry(200, 80, 50);
const material11 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cube11 = new THREE.Mesh(geometry11, material11);
cube11.position.set(0, 3, -50);
cube11.position.x = 180;
cube11.visible = false;
cube11.position.z = -320;
scene.add(cube11);


const geometry12 = new THREE.BoxGeometry(160, 80, 210);
const material12 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube12 = new THREE.Mesh(geometry12, material12);
cube12.position.set(0, 3, -50);
cube12.position.x = 5;
cube12.visible = false;
cube12.position.z = -250;
scene.add(cube12);

const geometry13 = new THREE.BoxGeometry(100, 80, 210);
const material13 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube13 = new THREE.Mesh(geometry13, material13);
cube13.position.set(0, 3, -50);
cube13.position.x = -270;
cube13.visible = false;
cube13.position.z = -215;
scene.add(cube13);



const geometry14 = new THREE.BoxGeometry(10, 80, 160);
const material14 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube14 = new THREE.Mesh(geometry14, material14);
cube14.position.set(0, 3, -50);
cube14.position.x = -260;
cube14.visible = false;
cube14.position.z = 27;
cube14.rotation.y = Math.PI / -6;
scene.add(cube14);

const geometry15 = new THREE.BoxGeometry(120, 80, 10);
const material15 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube15 = new THREE.Mesh(geometry15, material15);
cube15.position.set(0, 3, -50);
cube15.position.x = -260;
cube15.visible = false;
cube15.position.z = 95;
scene.add(cube15);

const geometry16 = new THREE.BoxGeometry(10, 80, 140);
const material16 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube16 = new THREE.Mesh(geometry16, material16);
cube16.position.set(0, 3, -50);
cube16.position.x = -220;
cube16.visible = false;
cube16.position.z = 40;
scene.add(cube16);



const geometry17 = new THREE.BoxGeometry(120, 80, 10);
const material17 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube17 = new THREE.Mesh(geometry17, material17);
cube17.position.set(0, 3, -50);
cube17.position.x = -180;
cube17.visible = false;
cube17.position.z = -30;
scene.add(cube17);



const geometry18 = new THREE.BoxGeometry(10, 80, 240);
const material18 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube18 = new THREE.Mesh(geometry18, material18);
cube18.position.set(0, 3, -50);
cube18.position.x = -380;
cube18.visible = false;
cube18.position.z = -5;
cube18.rotation.y = Math.PI / -6;
scene.add(cube18);


const geometry19 = new THREE.BoxGeometry(200, 80, 20);
const material19 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube19 = new THREE.Mesh(geometry19, material19);
cube19.position.set(0, 3, -50);
cube19.position.x = -180;
cube19.visible = false;
cube19.position.z = -300;
scene.add(cube19);

const geometry20 = new THREE.BoxGeometry(2500, 80, 20);
const material20 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube20 = new THREE.Mesh(geometry20, material20);
cube20.position.set(0, 3, -50);
cube20.position.x = -250;
cube20.visible = false;
cube20.position.z = 246;
scene.add(cube20);


const geometry21 = new THREE.BoxGeometry(10, 80, 210);
const material21 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube21 = new THREE.Mesh(geometry21, material21);
cube21.position.set(0, 3, -50);
cube21.position.x = -430;
cube21.visible = false;
cube21.position.z = 210;
scene.add(cube21);


const geometry22 = new THREE.BoxGeometry(10, 80, 140);
const material22 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube22 = new THREE.Mesh(geometry22, material22);
cube22.position.set(0, 3, -50);
cube22.position.x = -110;
cube22.visible = false;
cube22.position.z = 170;
cube22.rotation.y = Math.PI / -6;
scene.add(cube22);


const geometry23 = new THREE.BoxGeometry(10, 80, 140);
const material23 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const cube23 = new THREE.Mesh(geometry23, material23);
cube23.position.set(0, 3, -50);
cube23.position.x = -90;
cube23.visible = false;
cube23.position.z = 190;
scene.add(cube23);
// Cube setup
const geometry = new THREE.BoxGeometry(2, 16, 3);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.visible = false; 
scene.add(cube);

//key camera-------------------
// Attach camera to cube for first-person view
cube.add(camera);
camera.position.set(0, 16, 0);
const controls = new PointerLockControls(camera, document.body);
cube.add(controls.getObject());

// // // Xử lý sự kiện khi nhấn chuột
document.addEventListener('click', () => {
	controls.lock();
window.focus();
	
});
// ---------------------------------------------



// Camera is placed at the cube's "eye level"
//camera tạm thời
// const orbit = new OrbitControls(camera, renderer.domElement);
// camera.position.set(6, 8, 14);
// camera.lookAt(cube.position);
// orbit.update();
//ssss




//Light
const light = new THREE.AmbientLight(0x99CCFF); // soft white light
scene.add(light);
light.position.z = -12
light.position.x = 157
//Raycaster cube
const geometryR = new THREE.BoxGeometry(5, 5, 5);
const materialR = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR = new THREE.Mesh(geometryR, materialR);
cubeR.position.set(0, 15, -50);
cubeR.position.x = 157;
cubeR.visible = false;
cubeR.position.z = -12;
scene.add(cubeR);

const geometryR1 = new THREE.BoxGeometry(5, 5, 5);
const materialR1 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR1 = new THREE.Mesh(geometryR1, materialR1);
cubeR1.position.set(0, 15, -50);
cubeR1.position.x = 157;
cubeR1.visible = false;
cubeR1.position.z = 2.5;
scene.add(cubeR1);

const geometryR2 = new THREE.BoxGeometry(5, 5, 5);
const materialR2 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR2 = new THREE.Mesh(geometryR2, materialR2);
cubeR2.position.set(0, 15, -50);
cubeR2.position.x = 157;
cubeR2.visible = false;
cubeR2.position.z = 17;
scene.add(cubeR2);


const geometryR3 = new THREE.BoxGeometry(18, 15, 13);
const materialR3 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR3 = new THREE.Mesh(geometryR3, materialR3);
cubeR3.position.set(0, 15, -50);
cubeR3.position.x = 142;
cubeR3.visible = false;
cubeR3.position.z = 183;
cubeR3.rotation.y = Math.PI / -3;
scene.add(cubeR3);



const geometryR4 = new THREE.BoxGeometry(65, 25, 1);
const materialR4 = new THREE.MeshBasicMaterial({ color: 0xFF00FF });
const cubeR4 = new THREE.Mesh(geometryR4, materialR4);
cubeR4.position.set(0, 15, -50);
cubeR4.position.x = 192;
cubeR4.visible = false;
cubeR4.position.z = 232;
scene.add(cubeR4);


const geometryR5 = new THREE.BoxGeometry(65, 25, 1);
const materialR5 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR5 = new THREE.Mesh(geometryR5, materialR5);
cubeR5.position.set(0, 15, -50);
cubeR5.position.x = 265;
cubeR5.visible = false;
cubeR5.position.z = 232;
scene.add(cubeR5);

const geometryR6 = new THREE.BoxGeometry(1, 28, 65);
const materialR6 = new THREE.MeshBasicMaterial({ color: 0xFF3300 });
const cubeR6 = new THREE.Mesh(geometryR6, materialR6);
cubeR6.position.set(0, 20, -50);
cubeR6.position.x = 323;
cubeR6.visible = false;
cubeR6.position.z = 156;
scene.add(cubeR6);


const geometryR7 = new THREE.BoxGeometry(1, 28, 65);
const materialR7 = new THREE.MeshBasicMaterial({ color: 0x00FFFF });
const cubeR7 = new THREE.Mesh(geometryR7, materialR7);
cubeR7.position.set(0, 20, -50);
cubeR7.position.x = 323;
cubeR7.visible = false;
cubeR7.position.z = 82;
scene.add(cubeR7);


const geometryR8 = new THREE.BoxGeometry(1, 28, 50);
const materialR8 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR8 = new THREE.Mesh(geometryR8, materialR8);
cubeR8.position.set(0, 20, -50);
cubeR8.position.x = 235;
cubeR8.visible = false; 
cubeR8.position.z = -200;
scene.add(cubeR8);

const geometryR9 = new THREE.BoxGeometry(1, 28, 50);
const materialR9 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR9 = new THREE.Mesh(geometryR9, materialR9);
cubeR9.position.set(0, 20, -50);
cubeR9.position.x = 235;
cubeR9.visible = false; 
cubeR9.position.z = -275;
scene.add(cubeR9);


const geometryR10 = new THREE.BoxGeometry(50, 28, 1);
const materialR10 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR10 = new THREE.Mesh(geometryR10, materialR10);
cubeR10.position.set(0, 20, -50);
cubeR10.position.x = 202;
cubeR10.visible = false; 
cubeR10.position.z = -290;
scene.add(cubeR10);

const geometryR11 = new THREE.BoxGeometry(50, 28, 1);
const materialR11 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR11 = new THREE.Mesh(geometryR11, materialR11);
cubeR11.position.set(0, 20, -50);
cubeR11.position.x = 140;
cubeR11.visible = false; 
cubeR11.position.z = -290;
scene.add(cubeR11);


const geometryR12 = new THREE.BoxGeometry(1, 28, 50);
const materialR12 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR12 = new THREE.Mesh(geometryR12, materialR12);
cubeR12.position.set(0, 20, -50);
cubeR12.position.x = 86;
cubeR12.visible = false; 
cubeR12.position.z = -270;
scene.add(cubeR12);

const geometryR13 = new THREE.BoxGeometry(1, 28, 50);
const materialR13 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR13 = new THREE.Mesh(geometryR13, materialR13);
cubeR13.position.set(0, 20, -50);
cubeR13.position.x = 86;
cubeR13.visible = false; 
cubeR13.position.z = -206;
scene.add(cubeR13);

const geometryR14 = new THREE.BoxGeometry(1, 28, 50);
const materialR14 = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
const cubeR14 = new THREE.Mesh(geometryR14, materialR14);
cubeR14.position.set(0, 20, -50);
cubeR14.position.x = -90;
cubeR14.visible = false; 
cubeR14.position.z = -195;
scene.add(cubeR14);


const geometryR15 = new THREE.BoxGeometry(1, 28, 50);
const materialR15 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR15 = new THREE.Mesh(geometryR15, materialR15);
cubeR15.position.set(0, 20, -50);
cubeR15.position.x = -90;
cubeR15.visible = false; 
cubeR15.position.z = -260;
scene.add(cubeR15);


const geometryR16 = new THREE.BoxGeometry(60, 28, 1);
const materialR16 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR16 = new THREE.Mesh(geometryR16, materialR16);
cubeR16.position.set(0, 20, -50);
cubeR16.position.x = -160;
cubeR16.visible = false; 
cubeR16.position.z = -290;
scene.add(cubeR16);

const geometryR17 = new THREE.BoxGeometry(1, 28, 55);
const materialR17 = new THREE.MeshBasicMaterial({ color: 0xEEE5DE });
const cubeR17 = new THREE.Mesh(geometryR17, materialR17);
cubeR17.position.set(0, 20, -50);
cubeR17.position.x = -220;
cubeR17.visible = false; 
cubeR17.position.z = -260;
scene.add(cubeR17);

const geometryR18 = new THREE.BoxGeometry(1, 28, 55);
const materialR18 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR18 = new THREE.Mesh(geometryR18, materialR18);
cubeR18.position.set(0, 20, -50);
cubeR18.position.x = -220;
cubeR18.visible = false; 
cubeR18.position.z = -195;
scene.add(cubeR18);

const geometryR19 = new THREE.BoxGeometry(55, 28, 1);
const materialR19 = new THREE.MeshBasicMaterial({ color: 0x8470FF });
const cubeR19 = new THREE.Mesh(geometryR19, materialR19);
cubeR19.position.set(0, 20, -50);
cubeR19.position.x = -272;
cubeR19.visible = false; 
cubeR19.position.z = -115;
scene.add(cubeR19);

const geometryR20 = new THREE.BoxGeometry(1, 28, 55);
const materialR20 = new THREE.MeshBasicMaterial({ color: 0x40E0D0 });
const cubeR20 = new THREE.Mesh(geometryR20, materialR20);
cubeR20.position.set(0, 20, -50);
cubeR20.position.x = -413;
cubeR20.visible = false; 
cubeR20.position.z = 115;
scene.add(cubeR20);

const geometryR21 = new THREE.BoxGeometry(1, 28, 55);
const materialR21 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR21 = new THREE.Mesh(geometryR21, materialR21);
cubeR21.position.set(0, 21, -50);
cubeR21.position.x = -413;
cubeR21.visible = false; 
cubeR21.position.z = 180;
scene.add(cubeR21);

const geometryR22 = new THREE.BoxGeometry(55, 28, 1);
const materialR22 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR22 = new THREE.Mesh(geometryR22, materialR22);
cubeR22.position.set(0, 22, -50);
cubeR22.position.x = -390;
cubeR22.visible = false; 
cubeR22.position.z = 230;
scene.add(cubeR22);

const geometryR23 = new THREE.BoxGeometry(100, 28, 1);
const materialR23 = new THREE.MeshBasicMaterial({ color: 0xFFF68F });
const cubeR23 = new THREE.Mesh(geometryR23, materialR23);
cubeR23.position.set(0, 23, -50);
cubeR23.position.x = -230;
cubeR23.visible = false; 
cubeR23.position.z = 228;
scene.add(cubeR23);




const geometryR24 = new THREE.BoxGeometry(80, 50, 1);
const materialR24 = new THREE.MeshBasicMaterial({ color: 0xCC99FF });
const cubeR24 = new THREE.Mesh(geometryR24, materialR24);
cubeR24.position.set(0, 24, -50);
cubeR24.position.x = -260;
cubeR24.visible = false; 
cubeR24.position.z = 110;
scene.add(cubeR24);





var groupRaycast = [];
groupRaycast.push(cubeR1);
//Raycaster
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2(); // Vectơ để lưu tọa độ chuột
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects = raycaster.intersectObjects(groupRaycast);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects.length > 0) {
		document.getElementById('myIframe').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton = document.createElement('button');
		backButton.innerText = 'Back';
		backButton.className = 'back-button';
		controls.unlock();

		backButton.onclick = closeIframe; // Gọi hàm để đóng iframe
		const playSoundButton = document.createElement('button');
		playSoundButton.innerText = 'Play Sound';
		playSoundButton.className = 'play-sound-button';
		playSoundButton.onclick = playSound; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe').contentWindow.document.body.appendChild(backButton);
		document.getElementById('myIframe').contentWindow.document.body.appendChild(playSoundButton);
		iframeDocument.appendChild(backButton);
		iframeDocument.appendChild(playSoundButton);
		console.log("click");

	}
});

function closeIframe() {
	document.getElementById('myIframe').style.display = 'none'; // Ẩn iframe
	const backButton = document.querySelector('.back-button');
	const playSoundButton = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton) {
		backButton.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton) {
		playSoundButton.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound() {
	const audio = document.getElementById('sound');
	audio.play(); // Phát âm thanh
}


var groupRaycast1 = [];
groupRaycast1.push(cubeR);
//Raycaster
const raycaster1 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster1.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects1 = raycaster1.intersectObjects(groupRaycast1);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects1.length > 0) {
		document.getElementById('myIframe1').style.display = 'block'; // Hiển thị iframe
		console.log("click3");
		const backButton1 = document.createElement('button');
		backButton1.innerText = 'Back';
		backButton1.className = 'back-button';
		controls.unlock();

		backButton1.onclick = closeIframe1; // Gọi hàm để đóng iframe
		const playSoundButton1 = document.createElement('button');
		playSoundButton1.innerText = 'Play Sound';
		playSoundButton1.className = 'play-sound-button';
		playSoundButton1.onclick = playSound1; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe1').contentWindow.document.body.appendChild(backButton1);
		document.getElementById('myIframe1').contentWindow.document.body.appendChild(playSoundButton1);
		iframeDocument.appendChild(backButton1);
		iframeDocument.appendChild(playSoundButton1);
		console.log("click");

	}
});

function closeIframe1() {
	document.getElementById('myIframe1').style.display = 'none'; // Ẩn iframe
	const backButton1 = document.querySelector('.back-button');
	const playSoundButton1 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton1) {
		backButton1.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton1) {
		playSoundButton1.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound1() {
	const audio = document.getElementById('sound1');
	audio.play(); // Phát âm thanh
}



// var groupRaycast1 = [];
// groupRaycast1.push(cubeR);
// //Raycaster
// const raycaster1 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster1.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects1 = raycaster.intersectObjects(groupRaycast1);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects1.length > 0) {
// 		window.location.href = 'vali.html'; 
// 		console.log("click");
//     }
// });



var groupRaycast2 = [];
groupRaycast2.push(cubeR2);
//Raycaster
const raycaster2 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster2.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects2 = raycaster2.intersectObjects(groupRaycast2);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects2.length > 0) {
		document.getElementById('myIframe2').style.display = 'block'; // Hiển thị iframe
		console.log("click3");
		const backButton2 = document.createElement('button');
		backButton2.innerText = 'Back';
		backButton2.className = 'back-button';
		controls.unlock();

		backButton2.onclick = closeIframe2; // Gọi hàm để đóng iframe
		const playSoundButton2 = document.createElement('button');
		playSoundButton2.innerText = 'Play Sound';
		playSoundButton2.className = 'play-sound-button';
		playSoundButton2.onclick = playSound2; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe2').contentWindow.document.body.appendChild(backButton2);
		document.getElementById('myIframe2').contentWindow.document.body.appendChild(playSoundButton2);
		iframeDocument.appendChild(backButton2);
		iframeDocument.appendChild(playSoundButton2);
		console.log("click");

	}
});
function closeIframe2() {
	document.getElementById('myIframe2').style.display = 'none'; // Ẩn iframe
	const backButton2 = document.querySelector('.back-button');
	const playSoundButton2 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton2) {
		backButton2.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton2) {
		playSoundButton2.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound2() {
	const audio = document.getElementById('sound1');
	audio.play(); // Phát âm thanh
}

// var groupRaycast2 = [];
// groupRaycast2.push(cubeR2);
// //Raycaster
// const raycaster2 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster2.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects2 = raycaster.intersectObjects(groupRaycast2);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects2.length > 0) {
// 		window.location.href = 'radio.html'; 
// 		console.log("click");
//     }
// });

var groupRaycast3 = [];
groupRaycast3.push(cubeR3);
//Raycaster
const raycaster3 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster3.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects3 = raycaster3.intersectObjects(groupRaycast3);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects3.length > 0) {
		document.getElementById('myIframe3').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton3 = document.createElement('button');
		backButton3.innerText = 'Back';
		backButton3.className = 'back-button';
		controls.unlock();
		backButton3.onclick = closeIframe3; // Gọi hàm để đóng iframe
		const playSoundButton3 = document.createElement('button');
		playSoundButton3.innerText = 'Play Sound';
		playSoundButton3.className = 'play-sound-button';
		playSoundButton3.onclick = playSound3; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe3').contentWindow.document.body.appendChild(backButton3);
		document.getElementById('myIframe3').contentWindow.document.body.appendChild(playSoundButton3);
		iframeDocument.appendChild(backButton3);
		iframeDocument.appendChild(playSoundButton3);
		console.log("click");

	}
});

function closeIframe3() {
	document.getElementById('myIframe3').style.display = 'none'; // Ẩn iframe
	const backButton3 = document.querySelector('.back-button');
	const playSoundButton3 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton3) {
		backButton3.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton3) {
		playSoundButton3.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound3() {
	const audio = document.getElementById('sound3');
	audio.play(); // Phát âm thanh
}

// var groupRaycast3 = [];4
// groupRaycast3.push(cubeR3);
// //Raycaster
// const raycaster3 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 3 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster3.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects3 = raycaster.intersectObjects(groupRaycast3);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects3.length > 0) {
// 		window.location.href = 'tu3.html'; 
// 		console.log("click");
//     }
// });



var groupRaycast4 = [];
groupRaycast4.push(cubeR4);
//Raycaster
const raycaster4 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster4.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects4 = raycaster4.intersectObjects(groupRaycast4);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects4.length > 0) {
		document.getElementById('myIframe4').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		controls.unlock();
		const backButton4 = document.createElement('button');
		backButton4.innerText = 'Back';
		backButton4.className = 'back-button';
		backButton4.onclick = closeIframe4; // Gọi hàm để đóng iframe
		const playSoundButton4 = document.createElement('button');
		playSoundButton4.innerText = 'Play Sound';
		playSoundButton4.className = 'play-sound-button';
		playSoundButton4.onclick = playSound4; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe4').contentWindow.document.body.appendChild(backButton4);
		document.getElementById('myIframe4').contentWindow.document.body.appendChild(playSoundButton4);
		iframeDocument.appendChild(backButton4);
		iframeDocument.appendChild(playSoundButton4);
		console.log("click");

	}
});

function closeIframe4() {
	document.getElementById('myIframe4').style.display = 'none'; // Ẩn iframe
	const backButton4 = document.querySelector('.back-button');
	const playSoundButton4 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton4) {
		backButton4.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton4) {
		playSoundButton4.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound4() {
	const audio = document.getElementById('sound4');
	audio.play(); // Phát âm thanh
}



// var groupRaycast4 = [];
// groupRaycast4.push(cubeR4);
// //Raycaster
// const raycaster4 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster4.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects4 = raycaster.intersectObjects(groupRaycast4);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects4.length > 0) {
// 		window.location.href = 'slideshow1.html'; 
// 		console.log("click");
//     }
// });


var groupRaycast5 = [];
groupRaycast5.push(cubeR5);
//Raycaster
const raycaster5 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster5.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects5 = raycaster5.intersectObjects(groupRaycast5);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects5.length > 0) {
		document.getElementById('myIframe5').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton5 = document.createElement('button');
		backButton5.innerText = 'Back';
		backButton5.className = 'back-button';
		controls.unlock();
		backButton5.onclick = closeIframe5; // Gọi hàm để đóng iframe
		const playSoundButton5 = document.createElement('button');
		playSoundButton5.innerText = 'Play Sound';
		playSoundButton5.className = 'play-sound-button';
		playSoundButton5.onclick = playSound5; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe5').contentWindow.document.body.appendChild(backButton5);
		document.getElementById('myIframe5').contentWindow.document.body.appendChild(playSoundButton5);
		iframeDocument.appendChild(backButton5);
		iframeDocument.appendChild(playSoundButton5);
		console.log("click");

	}
});

function closeIframe5() {
	document.getElementById('myIframe5').style.display = 'none'; // Ẩn iframe
	const backButton5 = document.querySelector('.back-button');
	const playSoundButton5 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton5) {
		backButton5.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton5) {
		playSoundButton5.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound5() {
	const audio = document.getElementById('sound5');
	audio.play(); // Phát âm thanh
}

// var groupRaycast5 = [];
// groupRaycast5.push(cubeR5);
// //Raycaster
// const raycaster5 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster5.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects5 = raycaster.intersectObjects(groupRaycast5);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects5.length > 0) {
// 		window.location.href = 'slideshow2.html'; 
// 		console.log("click");
//     }
// });

var groupRaycast6 = [];
groupRaycast6.push(cubeR6);
//Raycaster
const raycaster6 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster6.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects6 = raycaster6.intersectObjects(groupRaycast6);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects6.length > 0) {
		document.getElementById('myIframe6').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton6 = document.createElement('button');
		backButton6.innerText = 'Back';
		backButton6.className = 'back-button';
		controls.unlock();
		backButton6.onclick = closeIframe6; // Gọi hàm để đóng iframe
		const playSoundButton6 = document.createElement('button');
		playSoundButton6.innerText = 'Play Sound';
		playSoundButton6.className = 'play-sound-button';
		playSoundButton6.onclick = playSound6; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe6').contentWindow.document.body.appendChild(backButton6);
		document.getElementById('myIframe6').contentWindow.document.body.appendChild(playSoundButton6);
		iframeDocument.appendChild(backButton6);
		iframeDocument.appendChild(playSoundButton6);
		console.log("click");

	}
});

function closeIframe6() {
	document.getElementById('myIframe6').style.display = 'none'; // Ẩn iframe
	const backButton6 = document.querySelector('.back-button');
	const playSoundButton6 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton6) {
		backButton6.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton6) {
		playSoundButton6.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound6() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}

// var groupRaycast6 = [];
// groupRaycast6.push(cubeR6);
// //Raycaster
// const raycaster6 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster6.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects6 = raycaster.intersectObjects(groupRaycast6);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects6.length > 0) {
// 		window.location.href = 'slideshow3.html';
// 		console.log("click");
//     }
// });
var groupRaycast7 = [];
groupRaycast7.push(cubeR7);
//Raycaster
const raycaster7 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster7.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects7 = raycaster7.intersectObjects(groupRaycast7);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects7.length > 0) {
		document.getElementById('myIframe7').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton7 = document.createElement('button');
		backButton7.innerText = 'Back';
		backButton7.className = 'back-button';
		controls.unlock();

		backButton7.onclick = closeIframe7; // Gọi hàm để đóng iframe
		const playSoundButton7 = document.createElement('button');
		playSoundButton7.innerText = 'Play Sound';
		playSoundButton7.className = 'play-sound-button';
		playSoundButton7.onclick = playSound7; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe7').contentWindow.document.body.appendChild(backButton7);
		document.getElementById('myIframe7').contentWindow.document.body.appendChild(playSoundButton7);
		iframeDocument.appendChild(backButton7);
		iframeDocument.appendChild(playSoundButton7);
		console.log("click");

	}
});

function closeIframe7() {
	document.getElementById('myIframe7').style.display = 'none'; // Ẩn iframe
	const backButton7 = document.querySelector('.back-button');
	const playSoundButton7 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton7) {
		backButton7.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton7) {
		playSoundButton7.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound7() {
	const audio = document.getElementById('sound7');
	audio.play(); // Phát âm thanh
}



var groupRaycast8 = [];
groupRaycast8.push(cubeR8);
//Raycaster
const raycaster8 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster8.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects8 = raycaster8.intersectObjects(groupRaycast8);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects8.length > 0) {
		document.getElementById('myIframe8').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton8 = document.createElement('button');
		backButton8.innerText = 'Back';
		backButton8.className = 'back-button';
		controls.unlock();
		backButton8.onclick = closeIframe8; // Gọi hàm để đóng iframe
		const playSoundButton8 = document.createElement('button');
		playSoundButton8.innerText = 'Play Sound';
		playSoundButton8.className = 'play-sound-button';
		playSoundButton8.onclick = playSound8; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe8').contentWindow.document.body.appendChild(backButton8);
		document.getElementById('myIframe8').contentWindow.document.body.appendChild(playSoundButton8);
		iframeDocument.appendChild(backButton8);
		iframeDocument.appendChild(playSoundButton8);
		console.log("click");

	}
});

function closeIframe8() {
	document.getElementById('myIframe8').style.display = 'none'; // Ẩn iframe
	const backButton8 = document.querySelector('.back-button');
	const playSoundButton8 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton8) {
		backButton8.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton8) {
		playSoundButton8.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound8() {
	const audio = document.getElementById('sound8');
	audio.play(); // Phát âm thanh
}




var groupRaycast9 = [];
groupRaycast9.push(cubeR9);
//Raycaster
const raycaster9 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster9.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects9 = raycaster9.intersectObjects(groupRaycast9);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects9.length > 0) {
		document.getElementById('myIframe9').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton9 = document.createElement('button');
		backButton9.innerText = 'Back';
		backButton9.className = 'back-button';
		controls.unlock();
		backButton9.onclick = closeIframe9; // Gọi hàm để đóng iframe
		const playSoundButton9 = document.createElement('button');
		playSoundButton9.innerText = 'Play Sound';
		playSoundButton9.className = 'play-sound-button';
		playSoundButton9.onclick = playSound9; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe9').contentWindow.document.body.appendChild(backButton9);
		document.getElementById('myIframe9').contentWindow.document.body.appendChild(playSoundButton9);
		iframeDocument.appendChild(backButton9);
		iframeDocument.appendChild(playSoundButton9);
		console.log("click");

	}
});

function closeIframe9() {
	document.getElementById('myIframe9').style.display = 'none'; // Ẩn iframe
	const backButton9 = document.querySelector('.back-button');
	const playSoundButton9 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton9) {
		backButton9.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton9) {
		playSoundButton9.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound9() {
	const audio = document.getElementById('sound9');
	audio.play(); // Phát âm thanh
}


var groupRaycast10 = [];
groupRaycast10.push(cubeR10);
//Raycaster
const raycaster10 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster10.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects10 = raycaster10.intersectObjects(groupRaycast10);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects10.length > 0) {
		document.getElementById('myIframe10').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton10 = document.createElement('button');
		backButton10.innerText = 'Back';
		backButton10.className = 'back-button';
		controls.unlock();
		backButton10.onclick = closeIframe10; // Gọi hàm để đóng iframe
		const playSoundButton10 = document.createElement('button');
		playSoundButton10.innerText = 'Play Sound';
		playSoundButton10.className = 'play-sound-button';
		playSoundButton10.onclick = playSound10; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe10').contentWindow.document.body.appendChild(backButton10);
		document.getElementById('myIframe10').contentWindow.document.body.appendChild(playSoundButton10);
		iframeDocument.appendChild(backButton10);
		iframeDocument.appendChild(playSoundButton10);
		console.log("click");

	}
});

function closeIframe10() {
	document.getElementById('myIframe10').style.display = 'none'; // Ẩn iframe
	const backButton10 = document.querySelector('.back-button');
	const playSoundButton10 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton10) {
		backButton10.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton10) {
		playSoundButton10.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound10() {
	const audio = document.getElementById('sound10');
	audio.play(); // Phát âm thanh
}
var groupRaycast11 = [];
groupRaycast11.push(cubeR11);
//Raycaster
const raycaster11 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster11.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects11 = raycaster11.intersectObjects(groupRaycast11);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects11.length > 0) {
		document.getElementById('myIframe11').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton11 = document.createElement('button');
		backButton11.innerText = 'Back';
		backButton11.className = 'back-button';
		controls.unlock();
		backButton11.onclick = closeIframe11; // Gọi hàm để đóng iframe
		const playSoundButton11 = document.createElement('button');
		playSoundButton11.innerText = 'Play Sound';
		playSoundButton11.className = 'play-sound-button';
		playSoundButton11.onclick = playSound11; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe11').contentWindow.document.body.appendChild(backButton11);
		document.getElementById('myIframe11').contentWindow.document.body.appendChild(playSoundButton11);
		iframeDocument.appendChild(backButton11);
		iframeDocument.appendChild(playSoundButton11);
		console.log("click");

	}
});

function closeIframe11() {
	document.getElementById('myIframe11').style.display = 'none'; // Ẩn iframe
	const backButton11 = document.querySelector('.back-button');
	const playSoundButton11 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton11) {
		backButton11.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton11) {
		playSoundButton11.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound11() {
	const audio = document.getElementById('sound11');
	audio.play(); // Phát âm thanh
}

var groupRaycast12 = [];
groupRaycast12.push(cubeR12);
//Raycaster
const raycaster12 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster12.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects12 = raycaster12.intersectObjects(groupRaycast12);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects12.length > 0) {
		document.getElementById('myIframe12').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton12 = document.createElement('button');
		backButton12.innerText = 'Back';
		backButton12.className = 'back-button';
		controls.unlock();
		backButton12.onclick = closeIframe12; // Gọi hàm để đóng iframe
		const playSoundButton12 = document.createElement('button');
		playSoundButton12.innerText = 'Play Sound';
		playSoundButton12.className = 'play-sound-button';
		playSoundButton12.onclick = playSound12; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe12').contentWindow.document.body.appendChild(backButton12);
		document.getElementById('myIframe12').contentWindow.document.body.appendChild(playSoundButton12);
		iframeDocument.appendChild(backButton12);
		iframeDocument.appendChild(playSoundButton12);
		console.log("click");

	}
});

function closeIframe12() {
	document.getElementById('myIframe12').style.display = 'none'; // Ẩn iframe
	const backButton12 = document.querySelector('.back-button');
	const playSoundButton12 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton12) {
		backButton12.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton12) {
		playSoundButton12.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound12() {
	const audio = document.getElementById('sound5');
	audio.play(); // Phát âm thanh
}

var groupRaycast13 = [];
groupRaycast13.push(cubeR13);
//Raycaster
const raycaster13 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster13.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects13 = raycaster13.intersectObjects(groupRaycast13);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects13.length > 0) {
		document.getElementById('myIframe13').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton13 = document.createElement('button');
		backButton13.innerText = 'Back';
		backButton13.className = 'back-button';
		controls.unlock();
		backButton13.onclick = closeIframe13; // Gọi hàm để đóng iframe
		const playSoundButton13 = document.createElement('button');
		playSoundButton13.innerText = 'Play Sound';
		playSoundButton13.className = 'play-sound-button';
		playSoundButton13.onclick = playSound13; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe13').contentWindow.document.body.appendChild(backButton13);
		document.getElementById('myIframe13').contentWindow.document.body.appendChild(playSoundButton13);
		iframeDocument.appendChild(backButton13);
		iframeDocument.appendChild(playSoundButton13);
		console.log("click");

	}
});

function closeIframe13() {
	document.getElementById('myIframe13').style.display = 'none'; // Ẩn iframe
	const backButton13 = document.querySelector('.back-button');
	const playSoundButton13 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton13) {
		backButton13.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton13) {
		playSoundButton13.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound13() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}




var groupRaycast14 = [];
groupRaycast14.push(cubeR14);
//Raycaster
const raycaster14 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster14.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects14 = raycaster14.intersectObjects(groupRaycast14);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects14.length > 0) {
		document.getElementById('myIframe14').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton14 = document.createElement('button');
		backButton14.innerText = 'Back';
		backButton14.className = 'back-button';
		controls.unlock();
		backButton14.onclick = closeIframe14; // Gọi hàm để đóng iframe
		const playSoundButton14 = document.createElement('button');
		playSoundButton14.innerText = 'Play Sound';
		playSoundButton14.className = 'play-sound-button';
		playSoundButton14.onclick = playSound14; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe14').contentWindow.document.body.appendChild(backButton14);
		document.getElementById('myIframe14').contentWindow.document.body.appendChild(playSoundButton14);
		iframeDocument.appendChild(backButton14);
		iframeDocument.appendChild(playSoundButton14);
		console.log("click");

	}
});

function closeIframe14() {
	document.getElementById('myIframe14').style.display = 'none'; // Ẩn iframe
	const backButton14 = document.querySelector('.back-button');
	const playSoundButton14 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton14) {
		backButton14.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton14) {
		playSoundButton14.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound14() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}


var groupRaycast15 = [];
groupRaycast15.push(cubeR15);
//Raycaster
const raycaster15 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster15.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects15 = raycaster15.intersectObjects(groupRaycast15);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects15.length > 0) {
		document.getElementById('myIframe15').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton15 = document.createElement('button');
		backButton15.innerText = 'Back';
		backButton15.className = 'back-button';
		controls.unlock();
		backButton15.onclick = closeIframe15; // Gọi hàm để đóng iframe
		const playSoundButton15 = document.createElement('button');
		playSoundButton15.innerText = 'Play Sound';
		playSoundButton15.className = 'play-sound-button';
		playSoundButton15.onclick = playSound15; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe15').contentWindow.document.body.appendChild(backButton15);
		document.getElementById('myIframe15').contentWindow.document.body.appendChild(playSoundButton15);
		iframeDocument.appendChild(backButton15);
		iframeDocument.appendChild(playSoundButton15);
		console.log("click");

	}
});

function closeIframe15() {
	document.getElementById('myIframe15').style.display = 'none'; // Ẩn iframe
	const backButton15 = document.querySelector('.back-button');
	const playSoundButton15 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton15) {
		backButton15.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton15) {
		playSoundButton15.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound15() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}



var groupRaycast16 = [];
groupRaycast16.push(cubeR16);
//Raycaster
const raycaster16 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster16.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects16 = raycaster16.intersectObjects(groupRaycast16);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects16.length > 0) {
		document.getElementById('myIframe16').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton16 = document.createElement('button');
		backButton16.innerText = 'Back';
		backButton16.className = 'back-button';
		controls.unlock();
		backButton16.onclick = closeIframe16; // Gọi hàm để đóng iframe
		const playSoundButton16 = document.createElement('button');
		playSoundButton16.innerText = 'Play Sound';
		playSoundButton16.className = 'play-sound-button';
		playSoundButton16.onclick = playSound16; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe16').contentWindow.document.body.appendChild(backButton16);
		document.getElementById('myIframe16').contentWindow.document.body.appendChild(playSoundButton16);
		iframeDocument.appendChild(backButton16);
		iframeDocument.appendChild(playSoundButton16);
		console.log("click");

	}
});


function closeIframe16() {
	document.getElementById('myIframe16').style.display = 'none'; // Ẩn iframe
	const backButton16 = document.querySelector('.back-button');
	const playSoundButton16 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton16) {
		backButton16.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton16) {
		playSoundButton16.remove(); // Xóa nút "Play Sound" nếu có
	}
}

function playSound16() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}


var groupRaycast17 = [];
groupRaycast17.push(cubeR17);
//Raycaster
const raycaster17 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster17.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects17 = raycaster17.intersectObjects(groupRaycast17);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects17.length > 0) {
		document.getElementById('myIframe17').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton17 = document.createElement('button');
		backButton17.innerText = 'Back';
		backButton17.className = 'back-button';
		controls.unlock();
		backButton17.onclick = closeIframe17; // Gọi hàm để đóng iframe
		const playSoundButton17 = document.createElement('button');
		playSoundButton17.innerText = 'Play Sound';
		playSoundButton17.className = 'play-sound-button';
		playSoundButton17.onclick = playSound17; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe17').contentWindow.document.body.appendChild(backButton17);
		document.getElementById('myIframe17').contentWindow.document.body.appendChild(playSoundButton17);
		iframeDocument.appendChild(backButton17);
		iframeDocument.appendChild(playSoundButton17);
		console.log("click");

	}
});

function closeIframe17() {
	document.getElementById('myIframe17').style.display = 'none'; // Ẩn iframe
	const backButton17 = document.querySelector('.back-button');
	const playSoundButton17 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton17) {
		backButton17.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton17) {
		playSoundButton17.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound17() {
	const audio = document.getElementById('sound17');
	audio.play(); // Phát âm thanh
}



var groupRaycast18 = [];
groupRaycast18.push(cubeR18);
//Raycaster
const raycaster18 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster18.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects18 = raycaster18.intersectObjects(groupRaycast18);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects18.length > 0) {
		document.getElementById('myIframe18').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton18 = document.createElement('button');
		backButton18.innerText = 'Back';
		backButton18.className = 'back-button';
		controls.unlock();
		backButton18.onclick = closeIframe18; // Gọi hàm để đóng iframe
		const playSoundButton18 = document.createElement('button');
		playSoundButton18.innerText = 'Play Sound';
		playSoundButton18.className = 'play-sound-button';
		playSoundButton18.onclick = playSound18; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe18').contentWindow.document.body.appendChild(backButton18);
		document.getElementById('myIframe18').contentWindow.document.body.appendChild(playSoundButton18);
		iframeDocument.appendChild(backButton18);
		iframeDocument.appendChild(playSoundButton18);
		console.log("click");

	}
});

function closeIframe18() {
	document.getElementById('myIframe18').style.display = 'none'; // Ẩn iframe
	const backButton18 = document.querySelector('.back-button');
	const playSoundButton18 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton18) {
		backButton18.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton18) {
		playSoundButton18.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound18() {
	const audio = document.getElementById('sound18');
	audio.play(); // Phát âm thanh
}


var groupRaycast19 = [];
groupRaycast19.push(cubeR19);
//Raycaster
const raycaster19 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster19.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects19 = raycaster19.intersectObjects(groupRaycast19);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects19.length > 0) {
		document.getElementById('myIframe19').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton19 = document.createElement('button');
		backButton19.innerText = 'Back';
		backButton19.className = 'back-button';
		controls.unlock();
		backButton19.onclick = closeIframe19; // Gọi hàm để đóng iframe
		const playSoundButton19 = document.createElement('button');
		playSoundButton19.innerText = 'Play Sound';
		playSoundButton19.className = 'play-sound-button';
		playSoundButton19.onclick = playSound19; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe19').contentWindow.document.body.appendChild(backButton19);
		document.getElementById('myIframe19').contentWindow.document.body.appendChild(playSoundButton19);
		iframeDocument.appendChild(backButton19);
		iframeDocument.appendChild(playSoundButton19);
		console.log("click");

	}
});

function closeIframe19() {
	document.getElementById('myIframe19').style.display = 'none'; // Ẩn iframe
	const backButton19 = document.querySelector('.back-button');
	const playSoundButton19 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton19) {
		backButton19.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton19) {
		playSoundButton19.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound19() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}

var groupRaycast20 = [];
groupRaycast20.push(cubeR20);
//Raycaster
const raycaster20 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster20.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects20 = raycaster20.intersectObjects(groupRaycast20);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects20.length > 0) {
		document.getElementById('myIframe20').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton20 = document.createElement('button');
		backButton20.innerText = 'Back';
		backButton20.className = 'back-button';
		controls.unlock();
		backButton20.onclick = closeIframe20; // Gọi hàm để đóng iframe
		const playSoundButton20 = document.createElement('button');
		playSoundButton20.innerText = 'Play Sound';
		playSoundButton20.className = 'play-sound-button';
		playSoundButton20.onclick = playSound20; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe20').contentWindow.document.body.appendChild(backButton20);
		document.getElementById('myIframe20').contentWindow.document.body.appendChild(playSoundButton20);
		iframeDocument.appendChild(backButton20);
		iframeDocument.appendChild(playSoundButton20);
		console.log("click");

	}
});

function closeIframe20() {
	document.getElementById('myIframe20').style.display = 'none'; // Ẩn iframe
	const backButton20 = document.querySelector('.back-button');
	const playSoundButton20 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton20) {
		backButton20.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton20) {
		playSoundButton20.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound20() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}
var groupRaycast21 = [];
groupRaycast21.push(cubeR21);
//Raycaster
const raycaster21 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster21.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects21 = raycaster21.intersectObjects(groupRaycast21);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects21.length > 0) {
		document.getElementById('myIframe21').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton21 = document.createElement('button');
		backButton21.innerText = 'Back';
		backButton21.className = 'back-button';
		controls.unlock();
		backButton21.onclick = closeIframe21; // Gọi hàm để đóng iframe
		const playSoundButton21 = document.createElement('button');
		playSoundButton21.innerText = 'Play Sound';
		playSoundButton21.className = 'play-sound-button';
		playSoundButton21.onclick = playSound21; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe21').contentWindow.document.body.appendChild(backButton21);
		document.getElementById('myIframe21').contentWindow.document.body.appendChild(playSoundButton21);
		iframeDocument.appendChild(backButton21);
		iframeDocument.appendChild(playSoundButton21);
		console.log("click");

	}
});

function closeIframe21() {
	document.getElementById('myIframe21').style.display = 'none'; // Ẩn iframe
	const backButton21 = document.querySelector('.back-button');
	const playSoundButton21 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton21) {
		backButton21.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton21) {
		playSoundButton21.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound21() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}
var groupRaycast22 = [];
groupRaycast22.push(cubeR22);
//Raycaster
const raycaster22 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster22.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects22 = raycaster22.intersectObjects(groupRaycast22);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects22.length > 0) {
		document.getElementById('myIframe22').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton22 = document.createElement('button');
		backButton22.innerText = 'Back';
		backButton22.className = 'back-button';
		controls.unlock();
		backButton22.onclick = closeIframe22; // Gọi hàm để đóng iframe
		const playSoundButton22 = document.createElement('button');
		playSoundButton22.innerText = 'Play Sound';
		playSoundButton22.className = 'play-sound-button';
		playSoundButton22.onclick = playSound22; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe22').contentWindow.document.body.appendChild(backButton22);
		document.getElementById('myIframe22').contentWindow.document.body.appendChild(playSoundButton22);
		iframeDocument.appendChild(backButton22);
		iframeDocument.appendChild(playSoundButton22);
		console.log("click");

	}
});

function closeIframe22() {
	document.getElementById('myIframe22').style.display = 'none'; // Ẩn iframe
	const backButton22 = document.querySelector('.back-button');
	const playSoundButton22 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton22) {
		backButton22.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton22) {
		playSoundButton22.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound22() {
	const audio = document.getElementById('sound6');
	audio.play(); // Phát âm thanh
}


var groupRaycast23 = [];
groupRaycast23.push(cubeR23);
//Raycaster
const raycaster23 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster23.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects23 = raycaster23.intersectObjects(groupRaycast23);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects23.length > 0) {
		document.getElementById('myIframe23').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton23 = document.createElement('button');
		backButton23.innerText = 'Back';
		backButton23.className = 'back-button';
		controls.unlock();
		backButton23.onclick = closeIframe23; // Gọi hàm để đóng iframe
		const playSoundButton23 = document.createElement('button');
		playSoundButton23.innerText = 'Play Sound';
		playSoundButton23.className = 'play-sound-button';
		playSoundButton23.onclick = playSound23; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe23').contentWindow.document.body.appendChild(backButton23);
		document.getElementById('myIframe23').contentWindow.document.body.appendChild(playSoundButton23);
		iframeDocument.appendChild(backButton23);
		iframeDocument.appendChild(playSoundButton23);
		console.log("click");

	}
});

function closeIframe23() {
	document.getElementById('myIframe23').style.display = 'none'; // Ẩn iframe
	const backButton23 = document.querySelector('.back-button');
	const playSoundButton23 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton23) {
		backButton23.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton23) {
		playSoundButton23.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound23() {
	const audio = document.getElementById('sound23');
	audio.play(); // Phát âm thanh
}


var groupRaycast24 = [];
groupRaycast24.push(cubeR24);
//Raycaster
const raycaster24 = new THREE.Raycaster();
window.addEventListener('click', (event) => {
	// Tính toán tọa độ chuột trong không gian -1 đến 1
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	// Cập nhật raycaster với camera và vị trí chuột
	raycaster24.setFromCamera(mouse, camera);
	console.log("1");
	// Tìm các đối tượng giao nhau
	const intersects24 = raycaster24.intersectObjects(groupRaycast24);
	// Nếu có va chạm, thay đổi màu sắc của khối lập phương
	if (intersects24.length > 0) {
		document.getElementById('myIframe24').style.display = 'block'; // Hiển thị iframe
		console.log("click");
		const backButton24 = document.createElement('button');
		backButton24.innerText = 'Back';
		backButton24.className = 'back-button';
		controls.unlock();
		backButton24.onclick = closeIframe24; // Gọi hàm để đóng iframe
		const playSoundButton24 = document.createElement('button');
		playSoundButton24.innerText = 'Play Sound';
		playSoundButton24.className = 'play-sound-button';
		playSoundButton24.onclick = playSound24; // Gọi hàm để phát âm thanh
		document.getElementById('myIframe24').contentWindow.document.body.appendChild(backButton24);
		document.getElementById('myIframe24').contentWindow.document.body.appendChild(playSoundButton24);
		iframeDocument.appendChild(backButton24);
		iframeDocument.appendChild(playSoundButton24);
		console.log("click");

	}
});

function closeIframe24() {
	document.getElementById('myIframe24').style.display = 'none'; // Ẩn iframe
	const backButton24 = document.querySelector('.back-button');
	const playSoundButton24 = document.querySelector('.play-sound-button');
	controls.lock();
window.focus();

	if (backButton24) {
		backButton24.remove(); // Xóa nút "Back" nếu có
	}
	if (playSoundButton24) {
		playSoundButton24.remove(); // Xóa nút "Play Sound" nếu có
	}
}
function playSound24() {
	const audio = document.getElementById('sound24');
	audio.play(); // Phát âm thanh
}
// var groupRaycast7 = [];
// groupRaycast7.push(cubeR7);
// //Raycaster
// const raycaster7 = new THREE.Raycaster();
// window.addEventListener('click', (event) => {
//     // Tính toán tọa độ chuột trong không gian -1 đến 1
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     // Cập nhật raycaster với camera và vị trí chuột
//     raycaster6.setFromCamera(mouse, camera);
// 	console.log("1");
//     // Tìm các đối tượng giao nhau
//     const intersects7 = raycaster.intersectObjects(groupRaycast7);
//     // Nếu có va chạm, thay đổi màu sắc của khối lập phương
//     if (intersects7.length > 0) {
// 		window.location.href = 'slideshow4.html';
// 		console.log("click");
//     }
// });



// Thêm sự kiện di chuyển chuột
// window.addEventListener('pointermove', onPointerMove);
// let speed = 1;
// let cubeTestCollier = cube.clone();
// // Movement controls
// document.addEventListener('keydown', (event) => {
// 	const direction = new THREE.Vector3(); // Vector để lưu hướng
// 	camera.getWorldDirection(direction);
// 	switch (event.key) {
// 		case 'w': // Di chuyển lên
// 			// cubeTestCollier.position.z -= speed;
// 			cube.position.addScaledVector(direction, speed);
// 			break;
// 		case 's': // Di chuyển xuống
// 			// cubeTestCollier.position.z += speed;
// 			cube.position.addScaledVector(direction, -speed);
// 			break;
// 		case 'a': // Di chuyển trái
// 			// cubeTestCollier.position.x -= speed;
// 			direction.cross(camera.up); // Tính hướng trái
// 			cube.position.addScaledVector(direction, -speed);
// 			break;
// 		case 'd': // Di chuyển phải
// 			direction.cross(camera.up); // Tính hướng trái
// 			cube.position.addScaledVector(direction, speed);
// 			// cubeTestCollier.position.x += speed;
// 			break;
// 	}
// 	// Kiểm tra va chạm sau khi di chuyển
// 	var isCollide = false;
// 	for (var i = 0; i < cubeblock.length; i++) {
// 		if (isColliding(cubeTestCollier, cubeblock[i])) {
// 			console.log("intersect");
// 			isCollide = true;
// 		}
// 	}
// 	if (isCollide) {
// 		cubeTestCollier.position.copy(cube.position); // Quay lại vị trí cũ nếu va chạm
// 	} else {
// 		cube.position.copy(cubeTestCollier.position);
// 	}

// 	// if (isColliding(cubeTestCollier, cubeblock)) {
// 	// 	console.log("intersect");
// 	//     cubeTestCollier.position.copy(cube.position); // Quay lại vị trí cũ nếu va chạm
// 	// } else {
// 	// 	cube.position.copy(cubeTestCollier.position);
// 	// }
// });


let speed = 2.5;
const direction = new THREE.Vector3(); // Vector để lưu hướng
const cubeTestCollier = cube.clone(); // Tạo bản sao của cube
let cubeblock = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12,cube13,cube14,cube15,cube16,cube17,cube18,cube19,cube20,cube21,cube22,cube23];
// Nhấn phím để di chuyển khối lập phương
document.addEventListener('keydown', (event) => {
    // Cập nhật hướng camera mỗi lần nhấn phím
    camera.getWorldDirection(direction);
    direction.y = 0; // Khống chế di chuyển trên mặt phẳng XY
    direction.normalize(); // Chuẩn hóa vector hướng
console.log("ásd");
    // Cập nhật vị trí của cubeTestCollier trước khi di chuyển
    cubeTestCollier.position.copy(cube.position);

    switch (event.key) {
        case 'w': // Di chuyển lên
            cubeTestCollier.position.addScaledVector(direction, speed);
            break;
        case 's': // Di chuyển xuống
            cubeTestCollier.position.addScaledVector(direction, -speed);
            break;
        case 'a': // Di chuyển trái
            direction.cross(camera.up); // Tính hướng trái
            cubeTestCollier.position.addScaledVector(direction, -speed);
            break;
        case 'd': // Di chuyển phải
            direction.cross(camera.up); // Tính hướng phải
            cubeTestCollier.position.addScaledVector(direction, speed);
            break;
    }

    // Kiểm tra va chạm sau khi di chuyển
    var isCollide = false;
    for (var i = 0; i < cubeblock.length; i++) {
        if (isColliding(cubeTestCollier, cubeblock[i])) {
            console.log("intersect");
            isCollide = true;
        }
    }
    if (isCollide) {
        // Quay lại vị trí cũ nếu va chạm
        // cube.position.copy(cubeTestCollier.position);
		cubeTestCollier.position.copy(cube.position);

    } else {
        // Cập nhật vị trí của cubeTestCollier
        // cubeTestCollier.position.copy(cube.position);
		cube.position.copy(cubeTestCollier.position);

    }
});
function isColliding(cube, cube1) {
    const boxA = new THREE.Box3().setFromObject(cube);
    const boxB = new THREE.Box3().setFromObject(cube1);
    return boxA.intersectsBox(boxB);
}
// let speed = 2;
// const direction = new THREE.Vector3(); // Vector để lưu hướng
// const cubeTestCollier = cube.clone(); // Tạo bản sao của cube
// let cubeblock = [cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10, cube11, cube12]
// document.addEventListener('keydown', (event) => {
//     // Cập nhật hướng camera mỗi lần nhấn phím
//     camera.getWorldDirection(direction);
//     direction.y = 0; // Khống chế di chuyển trên mặt phẳng XY
//     direction.normalize(); // Chuẩn hóa vector hướng
//     switch (event.key) {
//         case 'w': // Di chuyển lên
//             cube.position.addScaledVector(direction, speed);
//             break;
//         case 's': // Di chuyển xuống
//             cube.position.addScaledVector(direction, -speed);
//             break;
//         case 'a': // Di chuyển trái
//             direction.cross(camera.up); // Tính hướng trái
//             cube.position.addScaledVector(direction, -speed);
//             break;
//         case 'd': // Di chuyển phải
//             direction.cross(camera.up); // Tính hướng phải
//             cube.position.addScaledVector(direction, speed);
//             break;
//     }

//     // Kiểm tra va chạm sau khi di chuyển
//     var isCollide = false;
// 	// let cubeblock = cube1;
//     for (var i = 0; i < cubeblock.length; i++) {
//         if (isColliding(cubeTestCollier, cubeblock[i])) {
//             console.log("intersect");
//             isCollide = true;
//         }
//     }
//     if (isCollide) {
//         cubeTestCollier.position.copy(cube.position); // Quay lại vị trí cũ nếu va chạm
//     } else {
//         cube.position.copy(cubeTestCollier.position);
//     }
// });
// function isColliding(cube, cube1) {
// 	const boxA = new THREE.Box3().setFromObject(cube);
// 	const boxB = new THREE.Box3().setFromObject(cube1);
// 	return boxA.intersectsBox(boxB);
// }
// Handle window resize
window.addEventListener('resize', () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});
// Skybox setup
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
	px, nx, py, ny, pz, nz,
]);
// Audio setup
const listener = new THREE.AudioListener();
camera.add(listener);
const sound = new THREE.Audio(listener);
const audioLoader = new THREE.AudioLoader();
audioLoader.load('nhacnen/maintheme.mp3', function (buffer) {
	sound.setBuffer(buffer);
	sound.setLoop(true);
	sound.setVolume(0.5);
	sound.play();
});
// Load FBX model
const loader = new FBXLoader();
loader.load('phongtruyenthong.fbx', function (map) {
	map.castShadow = false;
	map.scale.set(0.1, 0.1, 0.1);
	map.position.y = 0;
	scene.add(map);
});
// document.addEventListener('click', () => {
//     controls.lock();
window.focus();

// });
// load GLB loader
// const loader1 = new GLTFLoader();
// loader1.load('models/phone/phone.glb', function ( map){
// 	map.castShadow = false;
// 	map.scale.set(0.1, 0.1, 0.1);
// 	map.position.y = 0;
// 	scene.add(map);
// })

function animate() {
	// Cập nhật vị trí của khối lập phương
	requestAnimationFrame(animate);
	// camera key
	controls.update();

	// render();
	renderer.render(scene, camera);
}


function goToHome() {
	window.location.href = 'index.html'; // Thay đổi 'index.html' thành trang chính của bạn
}

animate();

//di chuyển
//camera
//thêm dưx liệu