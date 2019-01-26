import * as THREE from 'three';
import OrbitControls from 'orbit-controls-es6';

import EventManager from './core/managers/EventManager';
import EntityManager from './core/managers/EntityManager';
import SystemManager from './core/managers/SystemManager';
import AssetManager from './core/managers/AssetManager';
import MeshSystem from './core/systems/Mesh';
import TransformSystem from './core/systems/Transform';
import SpriteSystem from './core/systems/Sprite';
import BillboardSystem from './core/systems/Billboard';
import AnimationSystem from './core/systems/Animation';

export const UPDATE_START = 'game.update_start';
export const UPDATE_END = 'game.update_end';

interface Options {
	debug?: boolean;
	controls?: boolean;
}

export default class Motor {
	domElement: HTMLElement;
	options: Options;

	eventManager: EventManager;
	entityManager: EntityManager;
	systemManager: SystemManager;
	assetManager: AssetManager;

	scene: THREE.Scene;
	clock: THREE.Clock;
	camera: THREE.PerspectiveCamera;
	renderer: THREE.WebGLRenderer;
	controls?: OrbitControls;

	animationRequest: number;

	constructor(domElement: HTMLElement, options: Options = {}) {
		this.domElement = domElement;
		this.options = options;

		this.update = this.update.bind(this);

		this.bootstrap();
		this.resize();
		this.update();
	}

	bootstrap() {
		this.eventManager = new EventManager(this);
		this.entityManager = new EntityManager(this);
		this.systemManager = new SystemManager(this);
		this.assetManager = new AssetManager(this);

		this.scene = new THREE.Scene();
		this.clock = new THREE.Clock(true);
		this.camera = new THREE.PerspectiveCamera();
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(0xdbe7ed);

		this.camera.position.set(4, 4, 4);
		this.camera.lookAt(new THREE.Vector3());

		if (this.options.debug) {
			this.scene.add(new THREE.AxesHelper(1));
		}

		if (this.options.controls) {
			this.controls = new OrbitControls(this.camera, this.domElement);
		}

		this.domElement.appendChild(this.renderer.domElement);

		this.systemManager.addSystem(new MeshSystem(this));
		this.systemManager.addSystem(new TransformSystem(this));
		this.systemManager.addSystem(new SpriteSystem(this));
		this.systemManager.addSystem(new BillboardSystem(this));
		this.systemManager.addSystem(new AnimationSystem(this));
	}

	resize() {
		const width = this.domElement.clientWidth;
		const height = this.domElement.clientHeight;
		const aspect = width / height;

		this.camera.fov = 60;
		this.camera.aspect = aspect;
		this.camera.near = 0.1;
		this.camera.far = 1000;
		this.camera.updateProjectionMatrix();

		this.renderer.setSize(width, height);
	}

	update() {
		this.animationRequest = requestAnimationFrame(this.update);

		this.eventManager.emit(UPDATE_START);
		this.clock.getElapsedTime();
		this.systemManager.update();
		this.eventManager.emit(UPDATE_END);

		this.renderer.render(this.scene, this.camera);
	}

	dispose() {
		this.renderer.domElement.remove();
		this.renderer.dispose();

		if (this.controls) {
			this.controls.dispose();
		}

		if (this.animationRequest) {
			cancelAnimationFrame(this.animationRequest);
		}
	}
}

// import * as THREE from 'three';
// import OrbitControls from 'orbit-controls-es6';

// import Loader from './Loader';
// import Entity from './Entity';
// import System from './System';

// interface MotorConfig {
// 	debug?: boolean;
// }

// class Motor {
// 	domElement: HTMLElement;
// 	config: MotorConfig;

// 	scene: THREE.Scene;
// 	camera: THREE.PerspectiveCamera;
// 	renderer: THREE.WebGLRenderer;
// 	controls?: OrbitControls;
// 	animationRequest?: number;

// 	loader: Loader;
// 	systems: Array<System>;
// 	assets: {
// 		[name: string]: any;
// 	};
// 	entities: {
// 		[name: string]: Entity;
// 	};
// 	systemEntities: {
// 		[name: string]: Array<Entity>;
// 	};

// 	constructor(domElement: HTMLElement, config?: MotorConfig) {
// 		this.domElement = domElement;
// 		this.config = config || {};

// 		this.scene = new THREE.Scene();
// 		this.camera = new THREE.PerspectiveCamera();
// 		this.renderer = new THREE.WebGLRenderer();
// 		this.renderer.setClearColor(0xdbe7ed);

// 		this.loader = new Loader(this);

// 		this.assets = {};
// 		this.systems = [];
// 		this.entities = {};
// 		this.systemEntities = {};

// 		this.attach();
// 		this.setup();

// 		this.update = this.update.bind(this);
// 		this.update();
// 	}

// 	attach() {
// 		this.domElement.append(this.renderer.domElement);
// 		this.resize();
// 	}

// 	setup() {
// 		if (this.config.debug) {
// 			this.scene.add(new THREE.AxesHelper(1));
// 			this.camera.position.set(4, 4, 4);
// 			this.camera.lookAt(new THREE.Vector3(0, 0, 0));

// 			this.controls = new OrbitControls(this.camera, this.domElement);
// 		}
// 	}

// 	dispose() {
// 		this.renderer.domElement.remove();
// 		this.renderer.dispose();

// 		if (this.controls) {
// 			this.controls.dispose();
// 		}

// 		if (this.animationRequest) {
// 			cancelAnimationFrame(this.animationRequest);
// 		}
// 	}

// 	resize() {
// 		const width = this.domElement.clientWidth;
// 		const height = this.domElement.clientHeight;
// 		const aspect = width / height;

// 		this.camera.fov = 60;
// 		this.camera.aspect = aspect;
// 		this.camera.near = 0.1;
// 		this.camera.far = 1000;
// 		this.camera.updateProjectionMatrix();

// 		this.renderer.setSize(width, height);
// 	}

// 	entity(name: string): Entity {
// 		const entity = new Entity(this, name);
// 		this.entities[name] = entity;
// 		return entity;
// 	}

// 	system(name: string, components: Array<string>, handler: (entity: any) => void): System {
// 		const system = new System(this, name, components, handler);

// 		this.systems.push(system);
// 		this.systemEntities[name] = this.systemEntities[name] || [];

// 		return system;
// 	}

// 	updateSystemEntities() {
// 		this.systems.forEach(system => {
// 			const name = system.name;
// 			this.systemEntities[name] = [];

// 			Object.values(this.entities).forEach(entity => {
// 				if (system.isCompatible(entity)) {
// 					this.systemEntities[name].push(entity);
// 				}
// 			});
// 		});
// 	}

// 	update() {
// 		this.systems.forEach(system => {
// 			this.systemEntities[system.name].forEach(entity => {
// 				system.handler(entity, entity.components);
// 			});
// 		});

// 		this.renderer.render(this.scene, this.camera);

// 		this.animationRequest = requestAnimationFrame(this.update);
// 	}
// }

// export default Motor;
