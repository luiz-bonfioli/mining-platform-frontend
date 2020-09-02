import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';

@Component({
  selector: 'app-map-viewer',
  templateUrl: './map-viewer.component.html',
  styleUrls: ['./map-viewer.component.scss']
})
export class MapViewerComponent implements OnInit, OnDestroy, AfterViewInit  {

  @ViewChild('container') container: ElementRef;

  constructor() {
    
  }

  ngAfterViewInit(): void {
    //import * as THREE from '../build/three.module.js';

			//import Stats from './jsm/libs/stats.module.js';

		//	import { OrbitControls } from './jsm/controls/OrbitControls.js';
			//import { ImprovedNoise } from './jsm/math/ImprovedNoise.js';

			var stats;

			var camera, controls, scene, renderer;

			var mesh, texture;

			var worldWidth = 256, worldDepth = 256,
				worldHalfWidth = worldWidth / 2, worldHalfDepth = worldDepth / 2;

			var helper;

			var raycaster = new THREE.Raycaster();
			var mouse = new THREE.Vector2();

			init(this.container.nativeElement);
			animate();

			function init(container) {
				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0xbfd1e5 );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 10, 20000 );

				controls = new OrbitControls( camera, renderer.domElement );
				controls.minDistance = 1000;
				controls.maxDistance = 10000;
				controls.maxPolarAngle = Math.PI / 2;

				//

				var data = generateHeight( worldWidth, worldDepth );

				controls.target.y = data[ worldHalfWidth + worldHalfDepth * worldWidth ] + 500;
				camera.position.y = controls.target.y + 2000;
				camera.position.x = 2000;
				controls.update();

				var geometry = new THREE.PlaneBufferGeometry( 7500, 7500, worldWidth - 1, worldDepth - 1 );
				geometry.rotateX( - Math.PI / 2 );

				var vertices = geometry.attributes.position.array;

				for ( var i = 0, j = 0, l = vertices.length; i < l; i ++, j += 3 ) {

			//		vertices[ j + 1 ] = data[ i ] * 10;

				}

		//		geometry.computeFaceNormals(); // needed for helper

				//

				texture = new THREE.CanvasTexture( generateTexture( data, worldWidth, worldDepth ) );
				texture.wrapS = THREE.ClampToEdgeWrapping;
				texture.wrapT = THREE.ClampToEdgeWrapping;

				mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { map: texture } ) );
				scene.add( mesh );

				var geometry1 = new THREE.ConeBufferGeometry( 20, 100, 3 );
				geometry1.translate( 0, 50, 0 );
				geometry1.rotateX( Math.PI / 2 );
				helper = new THREE.Mesh( geometry1, new THREE.MeshNormalMaterial() );
				scene.add( helper );

				container.addEventListener( 'mousemove', onMouseMove, false );

				//stats = new Stats();
				//container.appendChild( stats.dom );

				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function generateHeight( width, height ) {

				var size = width * height, data = new Uint8Array( size ),
					perlin = new ImprovedNoise(), quality = 1, z = Math.random() * 100;

				for ( var j = 0; j < 4; j ++ ) {

					for ( var i = 0; i < size; i ++ ) {

						var x = i % width, y = ~ ~ ( i / width );
						data[ i ] += Math.abs( perlin.noise( x / quality, y / quality, z ) * quality * 1.75 );

					}

					quality *= 5;

				}

				return data;

			}

			function generateTexture( data, width, height ) {

				// bake lighting into texture

				var canvas, canvasScaled, context, image, imageData, vector3, sun, shade;

				vector3 = new THREE.Vector3( 0, 0, 0 );

				sun = new THREE.Vector3( 1, 1, 1 );
				sun.normalize();

				canvas = document.createElement( 'canvas' );
				canvas.width = width;
				canvas.height = height;

				context = canvas.getContext( '2d' );
				context.fillStyle = '#000';
				context.fillRect( 0, 0, width, height );

				image = context.getImageData( 0, 0, canvas.width, canvas.height );
				imageData = image.data;

				for ( var i = 0, j = 0, l = imageData.length; i < l; i += 4, j ++ ) {

					vector3.x = data[ j - 2 ] - data[ j + 2 ];
					vector3.y = 2;
					vector3.z = data[ j - width * 2 ] - data[ j + width * 2 ];
					vector3.normalize();

					shade = vector3.dot( sun );

					imageData[ i ] = ( 96 + shade * 128 ) * ( 0.5 + data[ j ] * 0.007 );
					imageData[ i + 1 ] = ( 32 + shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );
					imageData[ i + 2 ] = ( shade * 96 ) * ( 0.5 + data[ j ] * 0.007 );

				}

				context.putImageData( image, 0, 0 );

				// Scaled 4x

				canvasScaled = document.createElement( 'canvas' );
				canvasScaled.width = width * 4;
				canvasScaled.height = height * 4;

				context = canvasScaled.getContext( '2d' );
				context.scale( 4, 4 );
				context.drawImage( canvas, 0, 0 );

				image = context.getImageData( 0, 0, canvasScaled.width, canvasScaled.height );
				imageData = image.data;

				for ( var i = 0, l = imageData.length; i < l; i += 4 ) {

					var v = ~ ~ ( Math.random() * 5 );

					imageData[ i ] += v;
					imageData[ i + 1 ] += v;
					imageData[ i + 2 ] += v;

				}

				context.putImageData( image, 0, 0 );

				return canvasScaled;

			}

			//

			function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();

			}

			function render() {

				renderer.render( scene, camera );

			}

			function onMouseMove( event ) {

				mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;
				raycaster.setFromCamera( mouse, camera );

				// See if the ray from the camera into the world hits one of our meshes
				var intersects = raycaster.intersectObject( mesh );

				// Toggle rotation bool for meshes that we clicked
				if ( intersects.length > 0 ) {

					helper.position.set( 0, 0, 0 );
					helper.lookAt( intersects[ 0 ].face.normal );

					helper.position.copy( intersects[ 0 ].point );

				}

			}
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
