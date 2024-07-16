import { Scene, MeshBasicMaterial, Mesh, PerspectiveCamera, WebGLRenderer, AxesHelper, BoxGeometry, Group } from 'three'

const canvas = document.querySelector('canvas.webgl')

const scene = new Scene();
// const sphereGeometry = new BoxGeometry(0.5, 0.5, 0.5);
// const sphereMaterial = new MeshBasicMaterial({ color: 'red' });
// const mesh = new Mesh(sphereGeometry, sphereMaterial)

// mesh.position.set(1.03, 0.85, -2)
// mesh.scale.setX(4)
// // mesh.rotateZ(Math.PI * 0.25)
// mesh.rotation.set(Math.PI * 0.25, 0, Math.PI * 0.25)

// scene.add(mesh);

const camera = new PerspectiveCamera(45, 600 / 800, 1, 1000)
camera.position.set(1, 1.2, 10)
// camera.lookAt(mesh.position)

const group = new Group();

const cube1 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'red' })
)

const cube2 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'red' })
)

cube2.position.setX(1.5);

const cube3 = new Mesh(
    new BoxGeometry(1, 1, 1),
    new MeshBasicMaterial({ color: 'red' })
)

cube3.position.setX(3);

group.add(cube1, cube2, cube3);
group.scale.setY(2);
group.rotateX(Math.PI * 0.25)
scene.add(group);

const axisHelper = new AxesHelper(3);
scene.add(axisHelper);

const renderer = new WebGLRenderer({
    canvas: canvas
});
renderer.setSize(600, 800);
renderer.render(scene, camera)
