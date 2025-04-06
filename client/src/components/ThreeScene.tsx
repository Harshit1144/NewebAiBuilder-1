import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface ThreeSceneProps {
  type: 'ai-grid' | 'wordpress' | 'server' | 'analytics';
  className?: string;
}

export default function ThreeScene({ type, className = '' }: ThreeSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create a scene
    const scene = new THREE.Scene();
    
    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75, 
      containerRef.current.clientWidth / containerRef.current.clientHeight, 
      0.1, 
      1000
    );
    camera.position.z = 5;
    
    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(
      containerRef.current.clientWidth, 
      containerRef.current.clientHeight
    );
    containerRef.current.appendChild(renderer.domElement);
    
    // Set up the specific visualization based on type
    let meshes: THREE.Mesh[] = [];
    
    if (type === 'ai-grid') {
      // Create a grid pattern to represent AI
      const gridSize = 10;
      const gridDivisions = 10;
      const gridHelper = new THREE.GridHelper(gridSize, gridDivisions, 0x4287f5, 0x4287f5);
      scene.add(gridHelper);
      
      // Add some glowing nodes at intersections
      const geometry = new THREE.SphereGeometry(0.1, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0x4287f5 });
      
      for (let i = -gridSize/2; i <= gridSize/2; i += gridSize/gridDivisions) {
        for (let j = -gridSize/2; j <= gridSize/2; j += gridSize/gridDivisions) {
          // Only place spheres at some intersections
          if (Math.random() > 0.7) {
            const sphere = new THREE.Mesh(geometry, material);
            sphere.position.set(i, 0, j);
            scene.add(sphere);
            meshes.push(sphere);
          }
        }
      }
      
      // Add some floating connections between nodes
      const linesMaterial = new THREE.LineBasicMaterial({ color: 0x4287f5, transparent: true, opacity: 0.4 });
      
      for (let i = 0; i < meshes.length; i++) {
        // Connect to a few random other spheres
        for (let j = 0; j < 2; j++) {
          const targetIndex = Math.floor(Math.random() * meshes.length);
          if (targetIndex !== i) {
            const points = [];
            points.push(meshes[i].position);
            points.push(meshes[targetIndex].position);
            
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(lineGeometry, linesMaterial);
            scene.add(line);
          }
        }
      }
      
      // Position the camera to see the grid
      camera.position.set(5, 5, 5);
      camera.lookAt(0, 0, 0);
    } else if (type === 'wordpress') {
      // Create a WordPress logo-inspired visualization
      const radius = 2;
      const detail = 1;
      const geometry = new THREE.IcosahedronGeometry(radius, detail);
      const material = new THREE.MeshNormalMaterial({ wireframe: true });
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);
      meshes.push(mesh);
      
      // Add some orbiting particles
      const particleCount = 100;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      
      for (let i = 0; i < particleCount * 3; i += 3) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 1.5;
        particlePositions[i] = Math.cos(angle) * radius;
        particlePositions[i+1] = (Math.random() - 0.5) * 3;
        particlePositions[i+2] = Math.sin(angle) * radius;
      }
      
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x21759b, // WordPress blue
        transparent: true,
        opacity: 0.7
      });
      
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);
    } else if (type === 'server') {
      // Create a server rack visualization
      const rackWidth = 2;
      const rackHeight = 3;
      const rackDepth = 1;
      
      const rackGeometry = new THREE.BoxGeometry(rackWidth, rackHeight, rackDepth);
      const rackMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x333333, 
        transparent: true, 
        opacity: 0.5,
        wireframe: true
      });
      const rack = new THREE.Mesh(rackGeometry, rackMaterial);
      scene.add(rack);
      
      // Add server units
      const serverCount = 5;
      const serverHeight = rackHeight / (serverCount + 1);
      const serverGeometry = new THREE.BoxGeometry(rackWidth * 0.9, serverHeight * 0.7, rackDepth * 0.8);
      
      for (let i = 0; i < serverCount; i++) {
        const yPos = -rackHeight/2 + (i+1) * (rackHeight/(serverCount+1));
        const serverMaterial = new THREE.MeshBasicMaterial({ 
          color: i % 2 === 0 ? 0x4287f5 : 0x21f54e
        });
        const server = new THREE.Mesh(serverGeometry, serverMaterial);
        server.position.y = yPos;
        scene.add(server);
        meshes.push(server);
        
        // Add blinking lights
        const lightGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const lightMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.set(rackWidth/2 - 0.15, yPos, rackDepth/2 - 0.1);
        scene.add(light);
        
        const lightMaterial2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const light2 = new THREE.Mesh(lightGeometry, lightMaterial2);
        light2.position.set(rackWidth/2 - 0.3, yPos, rackDepth/2 - 0.1);
        scene.add(light2);
      }
      
      camera.position.set(0, 0, 5);
    } else if (type === 'analytics') {
      // Create analytics/chart visualization
      const barCount = 7;
      const maxHeight = 2;
      const barWidth = 0.4;
      const spacing = 0.6;
      const totalWidth = barCount * (barWidth + spacing) - spacing;
      
      for (let i = 0; i < barCount; i++) {
        const height = 0.5 + Math.random() * maxHeight;
        const barGeometry = new THREE.BoxGeometry(barWidth, height, barWidth);
        const barMaterial = new THREE.MeshBasicMaterial({ 
          color: new THREE.Color(0.2 + i/barCount * 0.8, 0.4, 0.8) 
        });
        const bar = new THREE.Mesh(barGeometry, barMaterial);
        bar.position.x = -totalWidth/2 + i * (barWidth + spacing);
        bar.position.y = height/2;
        scene.add(bar);
        meshes.push(bar);
      }
      
      // Add connecting line at top of bars
      const points = [];
      for (let i = 0; i < meshes.length; i++) {
        const mesh = meshes[i];
        const height = (mesh.geometry as THREE.BoxGeometry).parameters?.height || 1;
        points.push(new THREE.Vector3(
          mesh.position.x, 
          mesh.position.y + height/2, 
          0
        ));
      }
      
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      scene.add(line);
      
      camera.position.set(0, 2, 8);
    }
    
    // Animation loop
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      // Rotate the entire scene slightly
      scene.rotation.y += 0.005;
      
      // Type-specific animations
      if (type === 'ai-grid') {
        // Pulse the nodes
        meshes.forEach((mesh, i) => {
          mesh.scale.x = mesh.scale.y = mesh.scale.z = 0.8 + Math.sin(Date.now() * 0.001 + i) * 0.2;
        });
      } else if (type === 'wordpress') {
        meshes.forEach(mesh => {
          mesh.rotation.x += 0.01;
          mesh.rotation.y += 0.01;
        });
      } else if (type === 'server') {
        // Blink server lights
        scene.children.forEach(child => {
          if (child instanceof THREE.Mesh && 
              child.geometry instanceof THREE.SphereGeometry) {
            // Check if it's a small sphere (indicator light)
            if (child.scale.x < 0.2) {
              const material = child.material as THREE.MeshBasicMaterial;
              if (Math.random() > 0.95) {
                material.opacity = material.opacity === 1 ? 0.3 : 1;
              }
            }
          }
        });
      } else if (type === 'analytics') {
        // Make bars grow and shrink
        meshes.forEach((mesh, i) => {
          const bar = mesh as THREE.Mesh<THREE.BoxGeometry>;
          const count = meshes.length;
          const originalHeight = 0.5 + (i / count) * 2;
          const newHeight = originalHeight + Math.sin(Date.now() * 0.001 + i) * 0.3;
          
          // Update geometry height
          bar.scale.y = newHeight / originalHeight;
        });
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      scene.children.forEach(child => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
    };
  }, [type]);
  
  return <div ref={containerRef} className={`w-full h-full ${className}`}></div>;
}