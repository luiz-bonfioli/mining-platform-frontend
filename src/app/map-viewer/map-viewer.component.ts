import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { ImageUtils } from 'three';

@Component({
	selector: 'app-map-viewer',
	templateUrl: './map-viewer.component.html',
	styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit, OnDestroy, AfterViewInit {

	@ViewChild('container') container: ElementRef;

	constructor() {

	}

	ngAfterViewInit(): void {

		

		/*
		Three.js "tutorials by example"
		Author: Lee Stemkoski
		Date: July 2013 (three.js v59dev)
	 */

		// MAIN

		// standard global variables
		var container, scene, camera, renderer, controls, stats;
		//var keyboard = new KeyboardState();
		var clock = new THREE.Clock();

		// custom global variables
		var mesh;

		init(this.container.nativeElement);
		animate();

		// FUNCTIONS 		
		function init(container) {
			// SCENE
			scene = new THREE.Scene();
			// CAMERA
			var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
			var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
			camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
			scene.add(camera);
			camera.position.set(0, 100, 400);
			camera.lookAt(scene.position);
			// RENDERER
		//	if (Detector.webgl)
	
				
		//	else
		//		renderer = new THREE.CanvasRenderer();
			renderer = new THREE.WebGLRenderer( { antialias: true } );
			renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
			//container = document.getElementById('ThreeJS');
			container.appendChild(renderer.domElement);
			// EVENTS
		//	THREEx.WindowResize(renderer, camera);
		//	THREEx.FullScreen.bindKey({ charCode: 'm'.charCodeAt(0) });
			// CONTROLS
			controls = new OrbitControls(camera, renderer.domElement);
			// STATS
		//	stats = new Stats();
			//stats.domElement.style.position = 'absolute';
			// stats.domElement.style.bottom = '0px';
			// stats.domElement.style.zIndex = 100;
			// container.appendChild(stats.domElement);
			// LIGHT
			var light = new THREE.PointLight(0xffffff);
			light.position.set(100, 250, 100);
			scene.add(light);
			// FLOOR
			var floorTexture = ImageUtils.loadTexture('assets/images/checkerboard.jpg');
			floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
			floorTexture.repeat.set(10, 10);
			var floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture, side: THREE.DoubleSide });
			var floorGeometry = new THREE.PlaneGeometry(1000, 1000, 10, 10);
			var floor = new THREE.Mesh(floorGeometry, floorMaterial);
			floor.position.y = -0.5;
			floor.rotation.x = Math.PI / 2;
			//scene.add(floor);
			// SKYBOX
			var skyBoxGeometry = new THREE.ConeGeometry(20000, 20000, 10000);
			var skyBoxMaterial = new THREE.MeshBasicMaterial({ color: 0x9999ff, side: THREE.BackSide });
			var skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
			scene.add(skyBox);

			////////////
			// CUSTOM //
			////////////

			// texture used to generate "bumpiness"
			var bumpTexture = ImageUtils.loadTexture('assets/images/heightmap.png');
			bumpTexture.wrapS = bumpTexture.wrapT = THREE.RepeatWrapping;
			// magnitude of normal displacement
			var bumpScale = 200.0;

			var oceanTexture = ImageUtils.loadTexture('assets/images/dirt-512.jpg');
			oceanTexture.wrapS = oceanTexture.wrapT = THREE.RepeatWrapping;

			var sandyTexture = ImageUtils.loadTexture('assets/images/sand-512.jpg');
			sandyTexture.wrapS = sandyTexture.wrapT = THREE.RepeatWrapping;

			var grassTexture = ImageUtils.loadTexture('assets/images/grass-512.jpg');
			grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;

			var rockyTexture = ImageUtils.loadTexture('assets/images/rock-512.jpg');
			rockyTexture.wrapS = rockyTexture.wrapT = THREE.RepeatWrapping;

			var snowyTexture = ImageUtils.loadTexture('assets/images/snow-512.jpg');
			snowyTexture.wrapS = snowyTexture.wrapT = THREE.RepeatWrapping;


			// use "this." to create global object
			var customUniforms = {
				bumpTexture: { type: "t", value: bumpTexture },
				bumpScale: { type: "f", value: bumpScale },
				oceanTexture: { type: "t", value: oceanTexture },
				sandyTexture: { type: "t", value: sandyTexture },
				grassTexture: { type: "t", value: grassTexture },
				rockyTexture: { type: "t", value: rockyTexture },
				snowyTexture: { type: "t", value: snowyTexture },
			};

			var vertexS = "  uniform sampler2D bumpTexture; 	uniform float bumpScale; varying float vAmount;varying vec2 vUV; 	void main() { vUV = uv;	vec4 bumpData = texture2D( bumpTexture, uv );				vAmount = bumpData.r;								vec3 newPosition = position + normal * bumpScale * vAmount;						gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );		}"
			var fragmentS = "uniform sampler2D oceanTexture; uniform sampler2D sandyTexture; uniform sampler2D grassTexture; uniform sampler2D rockyTexture; uniform sampler2D snowyTexture; varying vec2 vUV; varying float vAmount; void main() { 	vec4 water = (smoothstep(0.01, 0.25, vAmount) - smoothstep(0.24, 0.26, vAmount)) * texture2D( oceanTexture, vUV * 10.0 ); 	vec4 sandy = (smoothstep(0.24, 0.27, vAmount) - smoothstep(0.28, 0.31, vAmount)) * texture2D( sandyTexture, vUV * 10.0 ); 	vec4 grass = (smoothstep(0.28, 0.32, vAmount) - smoothstep(0.35, 0.40, vAmount)) * texture2D( grassTexture, vUV * 20.0 ); 	vec4 rocky = (smoothstep(0.30, 0.50, vAmount) - smoothstep(0.40, 0.70, vAmount)) * texture2D( rockyTexture, vUV * 20.0 ); 	vec4 snowy = (smoothstep(0.50, 0.65, vAmount))                                   * texture2D( snowyTexture, vUV * 10.0 ); 	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0) + water + sandy + grass + rocky + snowy;  }   "

			// create custom material from the shader code above
			//   that is within specially labelled script tags
			var customMaterial = new THREE.ShaderMaterial(
				{
					uniforms: customUniforms,
					vertexShader: vertexS, //vertexShader.innerHTML, // document.getElementById('vertexShader').textContent,
					fragmentShader: fragmentS, //document.getElementById('fragmentShader').textContent,
					// side: THREE.DoubleSide
				});

			var planeGeo = new THREE.PlaneGeometry(1000, 1000, 100, 100);
			var plane = new THREE.Mesh(planeGeo, customMaterial);
			plane.rotation.x = -Math.PI / 2;
			plane.position.y = -100;
			scene.add(plane);

			var waterGeo = new THREE.PlaneGeometry(1000, 1000, 1, 1);
			var waterTex = ImageUtils.loadTexture('assets/images/water512.jpg');
			waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
			waterTex.repeat.set(5, 5);
			var waterMat = new THREE.MeshBasicMaterial({ map: waterTex, transparent: true, opacity: 0.40 });
			var water = new THREE.Mesh(planeGeo, waterMat);
			water.rotation.x = -Math.PI / 2;
			water.position.y = -50;
			scene.add(water);



		}

		function animate() {
			requestAnimationFrame(animate);
			render();
			update();
		}

		function update() {
		//	if (keyboard.pressed("z")) {
				// do something
		//	}

			controls.update();
		//	stats.update();
		}

		function render() {
			renderer.render(scene, camera);
		}


		// 	var stats;

		// 	var camera, controls, scene, renderer;

		// 	var mesh, texture;

		// 	var worldWidth = 256, worldDepth = 256,
		// 		worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

		// 	var helper;

		// 	var raycaster = new THREE.Raycaster();
		// 	var mouse = new THREE.Vector2();

		// 	init(this.container.nativeElement);
		// 	animate();

		// 	function init(container) {
		// 		renderer = new THREE.WebGLRenderer( { antialias: true } );
		// 		renderer.setPixelRatio( window.devicePixelRatio );
		// 		renderer.setSize( window.innerWidth, window.innerHeight );
		// 		container.appendChild( renderer.domElement );

		// 		scene = new THREE.Scene();
		// 		scene.background = new THREE.Color( 0xbfd1e5 );

		// 		camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 10, 20000 );

		// 		controls = new OrbitControls( camera, renderer.domElement );
		// 		controls.minDistance = 1000;
		// 		controls.maxDistance = 10000;
		// 		controls.maxPolarAngle = Math.PI / 2;

		// 		//

		// 		var data = generateHeight( worldWidth, worldDepth );

		// 		controls.target.y = data[ worldHalfWidth + worldHalfDepth * worldWidth ] + 500;
		// 		camera.position.y = controls.target.y + 2000;
		// 		camera.position.x = 2000;
		// 		controls.update();

		// 		var geometry = new THREE.PlaneBufferGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
		// 		geometry.rotateX( - Math.PI / 2 );

		// 		var vertices = geometry.attributes.position.array;

		// 		for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {

		// 	//		vertices[ j + 1 ] = data[ i ] * 10;

		// 		}

		// //		geometry.computeFaceNormals(); // needed for helper

		// 		//

		// 		texture = new THREE.CanvasTexture( generateTexture( data, worldWidth, worldDepth ) );
		// 		texture.wrapS = THREE.ClampToEdgeWrapping;
		// 		texture.wrapT = THREE.ClampToEdgeWrapping;

		// 		mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
		// 		scene.add( mesh );

		// 		var geometry1 = new THREE.ConeBufferGeometry( 20, 100, 3 );
		// 		geometry1.translate( 0, 50, 0 );
		// 		geometry1.rotateX( Math.PI / 2 );
		// 		helper = new THREE.Mesh( geometry1, new THREE.MeshNormalMaterial() );
		// 		scene.add( helper );

		// 		container.addEventListener( 'mousemove', onMouseMove, false );

		// 		//stats = new Stats();
		// 		//container.appendChild( stats.dom );

		// 		//

		// 		window.addEventListener( 'resize', onWindowResize, false );

		// 	}

		// 	function onWindowResize() {

		// 		camera.aspect = window.innerWidth / window.innerHeight;
		// 		camera.updateProjectionMatrix();

		// 		renderer.setSize( window.innerWidth, window.innerHeight );

		// 	}

		// 	function generateHeight( width, height ) {

		// 		var size = width * height, data = new Uint8Array( size ),
		// 			perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

		// 		for ( var j = 0; j < 4; j ++ ) {

		// 			for ( var i = 0; i < size; i ++ ) {

		// 				var x = i % width, y = ~ ~ ( i / width );
		// 				data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );

		// 			}

		// 			quality *= 5;

		// 		}

		// 		return data;

		// 	}

		// 	function generateTexture( data, width, height ) {

		// 		// bake lighting into texture

		// 		var canvas, canvasScaled, context, image, imageData, vector3, sun, shade;

		// 		vector3 = new THREE.Vector3( 0, 0, 0 );

		// 		sun = new THREE.Vector3( 1, 1, 1 );
		// 		sun.normalize();

		// 		canvas = document.createElement( 'canvas' );
		// 		canvas.width = width;
		// 		canvas.height = height;

		// 		context = canvas.getContext( '2d' );
		// 		context.fillStyle = '#000';
		// 		context.fillRect( 0, 0, width, height );

		// 		image = context.getImageData( 0, 0, canvas.width, canvas.height );
		// 		imageData = image.data;

		// 		for ( var i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

		// 			vector3.x = data[ j - 2 ] - data[ j + 2 ];
		// 			vector3.y = 2;
		// 			vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
		// 			vector3.normalize();

		// 			shade = vector3.dot( sun );

		// 			imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
		// 			imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
		// 			imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );

		// 		}

		// 		context.putImageData( image, 0, 0 );

		// 		// Scaled 4x

		// 		canvasScaled = document.createElement( 'canvas' );
		// 		canvasScaled.width = width * 4;
		// 		canvasScaled.height = height * 4;

		// 		context = canvasScaled.getContext( '2d' );
		// 		context.scale( 4, 4 );
		// 		context.drawImage( canvas, 0, 0 );

		// 		image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
		// 		imageData = image.data;

		// 		for ( var i = 0, l = imageData.length; i < l; i += 4 ) {

		// 			var v = ~ ~ ( Math.random() * 5 );

		// 			imageData[ i ] += v;
		// 			imageData[ i + 1 ] += v;
		// 			imageData[ i + 2 ] += v;

		// 		}

		// 		context.putImageData( image, 0, 0 );

		// 		return canvasScaled;

		// 	}

		// 	//

		// 	function animate() {

		// 		requestAnimationFrame( animate );

		// 		render();
		// 		stats.update();

		// 	}

		// 	function render() {

		// 		renderer.render( scene, camera );

		// 	}

		// 	function onMouseMove( event ) {

		// 		mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
		// 		mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
		// 		raycaster.setFromCamera( mouse, camera );

		// 		// See if the ray from the camera into the world hits one of our meshes
		// 		var intersects = raycaster.intersectObject( mesh );

		// 		// Toggle rotation bool for meshes that we clicked
		// 		if ( intersects.length > 0 ) {

		// 			helper.position.set( 0, 0, 0 );
		// 			helper.lookAt( intersects[ 0 ].face.normal );

		// 			helper.position.copy( intersects[ 0 ].point );

		// 		}

		// 	}
	}


	ngOnDestroy(): void {

	}

	// ngAfterViewInit(): void {
	//   var scene = new THREE.Scene();
	//   var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);    

	//   var renderer = new THREE.WebGLRenderer();
	//   renderer.setSize(window.innerWidth, window.innerHeight);
	//   renderer.setClearColor(0xf5f9fd, 1);
	//   //renderer.setClearAlpha(0.)
	//   this.container.nativeElement.appendChild(renderer.domElement);

	//   var geometry = new THREE.BoxGeometry(1, 1, 1);
	//   var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
	//   var cube = new THREE.Mesh(geometry, material);
	//   scene.add(cube);

	//   camera.position.z = 5;

	//   var animate = function () {
	//     requestAnimationFrame(animate);

	//     cube.rotation.x += 0.01;
	//     cube.rotation.y += 0.01;

	//     renderer.render(scene, camera);
	//   };

	//   animate();
	// }

	ngOnInit(): void {



	}


}
