import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import TWEEN from '@tweenjs/tween.js';

const PlanetInfo = ({ planet, onClose }) => {
  if (!planet) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: '20px',
      borderRadius: '10px',
      color: 'white',
      maxWidth: '400px',
      zIndex: 1000
    }}>
      <h2>{planet.name}</h2>
      <p>Radius: {planet.radius} Earth radii</p>
      <p>Distance from Sun: {planet.distance} AU</p>
      <p>Orbit Speed: {planet.orbitSpeed} Earth years</p>
      <p>Rotation Speed: {planet.rotationSpeed} Earth days</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

const SolarSystem = () => {
  const mountRef = useRef(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [showPlanetInfo, setShowPlanetInfo] = useState(false);
  const [hoveredPlanet, setHoveredPlanet] = useState(null);

  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const planetMeshesRef = useRef([]);

  const handleCloseInfo = () => {
    setShowPlanetInfo(false);
    setHoveredPlanet(null);

    if (selectedPlanet) {
      const planetMesh = planetMeshesRef.current.find(p => p.mesh.userData.name === selectedPlanet.name)?.mesh;
      if (planetMesh) {
        new TWEEN.Tween(planetMesh.scale)
          .to({ x: 1, y: 1, z: 1 }, 1000)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }
    }
  };

  useEffect(() => {
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const starGeometry = new THREE.SphereGeometry(500, 32, 32);
    const starMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000, // Black background
      side: THREE.BackSide,
      map: new THREE.TextureLoader().load('https://i.imgur.com/8DkguUq.jpg'), // Star texture
    });
    const stars = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(stars);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    camera.position.z = 100;

    const planets = [
      { name: 'Mercury', radius: 0.5, distance: 5, color: 0xC0C0C0, orbitSpeed: 0.0015, rotationSpeed: 0.0017, eccentricity: 0.205 },
      { name: 'Venus', radius: 0.9, distance: 7, color: 0xFFA500, orbitSpeed: 0.0012, rotationSpeed: 0.0004, eccentricity: 0.007 },
      { name: 'Earth', radius: 1, distance: 10, color: 0x0000FF, orbitSpeed: 0.001, rotationSpeed: 0.0017, eccentricity: 0.017 },
      { name: 'Mars', radius: 0.6, distance: 15, color: 0xFF0000, orbitSpeed: 0.00053, rotationSpeed: 0.0025, eccentricity: 0.093 },
      { name: 'Jupiter', radius: 2, distance: 25, color: 0xFFA500, orbitSpeed: 0.00008, rotationSpeed: 0.0045, eccentricity: 0.049 },
      { name: 'Saturn', radius: 1.8, distance: 35, color: 0xFFD700, orbitSpeed: 0.000034, rotationSpeed: 0.0039, eccentricity: 0.056 },
      { name: 'Uranus', radius: 1.2, distance: 45, color: 0x00FFFF, orbitSpeed: 0.000012, rotationSpeed: 0.0030, eccentricity: 0.046 },
      { name: 'Neptune', radius: 1.1, distance: 55, color: 0x0000FF, orbitSpeed: 0.000006, rotationSpeed: 0.0028, eccentricity: 0.010 },
    ];

    const sunGeometry = new THREE.SphereGeometry(3, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const planetMeshes = planets.map(planet => {
      const geometry = new THREE.SphereGeometry(planet.radius, 32, 32);
      const material = new THREE.MeshPhongMaterial({ color: planet.color });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData.name = planet.name;
      scene.add(mesh);

      const orbitGeometry = new THREE.RingGeometry(planet.distance - 0.1, planet.distance + 0.1, 64);
      const orbitMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide, opacity: 0.2, transparent: true });
      const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
      orbit.rotation.x = Math.PI / 2;
      scene.add(orbit);

      // Create label for planet
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      context.font = '24px Arial';
      context.fillStyle = 'white';
      context.fillText(planet.name, 0, 24);
      const texture = new THREE.CanvasTexture(canvas);
      const labelMaterial = new THREE.SpriteMaterial({ map: texture });
      const label = new THREE.Sprite(labelMaterial);
      label.position.set(planet.distance + planet.radius + 1, planet.radius + 1, 0); // Initial label position
      label.scale.set(5, 2.5, 1); // Adjust size of the label
      scene.add(label); // Add the label to the scene

      return { mesh, label, angle: 0 };
    });
    planetMeshesRef.current = planetMeshes;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(planetMeshes.map(p => p.mesh));

      if (intersects.length > 0) {
        const clickedPlanet = intersects[0].object;
        const planetData = planets.find(p => p.name === clickedPlanet.userData.name);

        if (planetData) {
          setSelectedPlanet(planetData);
          setShowPlanetInfo(true);

          const planetPosition = clickedPlanet.position.clone();
          const cameraOffset = new THREE.Vector3(0, 0, planetData.radius * 5);
          const finalCameraPosition = planetPosition.add(cameraOffset);

          new TWEEN.Tween(camera.position)
            .to(finalCameraPosition, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

          new TWEEN.Tween(controls.target)
            .to(clickedPlanet.position, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();

          new TWEEN.Tween(clickedPlanet.scale)
            .to({ x: 2, y: 2, z: 2 }, 1000)
            .easing(TWEEN.Easing.Quadratic.Out)
            .start();
        }
      }
    };

    window.addEventListener('click', onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);

      planetMeshes.forEach((planetObj, i) => {
        planetObj.angle += planets[i].orbitSpeed;
        const x = planets[i].distance * Math.cos(planetObj.angle);
        const z = planets[i].distance * Math.sin(planetObj.angle);
        planetObj.mesh.position.set(x, 0, z);

        planetObj.mesh.rotation.y += planets[i].rotationSpeed;

        planetObj.label.position.set(x + planets[i].radius + 1, planets[i].radius + 1, z);
      });

      TWEEN.update();
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', onMouseClick);
      planetMeshesRef.current = [];
    };
  }, []);

  return (
    <div ref={mountRef}>
      {showPlanetInfo && <PlanetInfo planet={selectedPlanet} onClose={handleCloseInfo} />}
    </div>
  );
};

export default SolarSystem;