import './style.css'
import * as THREE from 'three'
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg')
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(35);
const geometry = new THREE.TorusGeometry(10, 3, 16, 100)
const material = new THREE.MeshStandardMaterial({
    color: 0xFF6374
})
const torus = new THREE.Mesh(geometry, material)
const pointl = new THREE.PointLight(0xffffff)
const amb = new THREE.AmbientLight(0xffffff)
pointl.position.set(5, 5, 5)
const helper = new THREE.PointLightHelper(pointl)
scene.add(amb, helper, pointl)
scene.add(torus)
let vel = Math.random() ** 2 * 0.2
addEventListener('keypress', (e) => {

})


function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += vel;
    renderer.render(scene, camera)
}
animate()