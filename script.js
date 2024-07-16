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

let prevTime = Date.now()

// animations
const tick = () => {
    console.log('tick');

    // acheive consistent animation on all machines despite their fps support
    const currentTime = Date.now();
    const deltaTime = currentTime - prevTime;
    prevTime = currentTime;

    // update objects
    mesh.rotation.x += 0.001 * deltaTime
    mesh.rotation.y += 0.001 * deltaTime
    mesh.rotation.z += 0.001 * deltaTime

    // render continuously
    renderer.render(scene, camera);

    window.requestAnimationFrame(tick)
}
tick()
