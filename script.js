import { Scene, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer, AxesHelper, BoxGeometry, Group } from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new Scene();

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 'red' });
const mesh = new Mesh(geometry, material);

scene.add(mesh);

const sizes = {
    width: 1000,
    height: 800
}

const camera = new PerspectiveCamera(45, sizes.width / sizes.height, 1, 1000);
camera.position.setZ(7);

const renderer = new WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

// animations
const tick = () => {
    console.log('tick');

    // update objects
    mesh.rotation.y += 0.01
    mesh.rotation.x -= 0.01
    mesh.rotation.z += 0.01

    // render continuously
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick)
}
tick()
