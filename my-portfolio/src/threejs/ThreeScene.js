import * as THREE from 'three';
import { TweenMax, Power0, Sine } from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const initThreeScene = () => {
  // Setup Three.js scene
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0xd5f8f8, 100, 300);

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(40, 20, 100);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xc5f5f5, 0.7);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 50;
  controls.maxDistance = 250;

  const ambientLight = new THREE.AmbientLight(0xc5f5f5, 1);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(30, 20, 0);
  directionalLight.castShadow = true;

  scene.add(ambientLight);
  scene.add(directionalLight);

  const floor = new THREE.Mesh(new THREE.PlaneBufferGeometry(1000, 1000), new THREE.MeshBasicMaterial({ color: 0xe0dacd }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -100;
  scene.add(floor);

  // Add Carrot and Clouds here (constructors omitted for brevity)

  const renderScene = () => {
    renderer.render(scene, camera);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderScene();
  };

  animate();

  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
    document.body.removeChild(renderer.domElement);
  };
};
