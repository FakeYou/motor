"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var orbit_controls_es6_1 = __importDefault(require("orbit-controls-es6"));
var EventManager_1 = __importDefault(require("./core/managers/EventManager"));
var EntityManager_1 = __importDefault(require("./core/managers/EntityManager"));
var SystemManager_1 = __importDefault(require("./core/managers/SystemManager"));
var AssetManager_1 = __importDefault(require("./core/managers/AssetManager"));
var Mesh_1 = __importDefault(require("./core/systems/Mesh"));
var Transform_1 = __importDefault(require("./core/systems/Transform"));
var Sprite_1 = __importDefault(require("./core/systems/Sprite"));
exports.UPDATE_START = 'game.update_start';
exports.UPDATE_END = 'game.update_end';
var Motor = /** @class */ (function () {
    function Motor(domElement, options) {
        if (options === void 0) { options = {}; }
        this.domElement = domElement;
        this.options = options;
        this.update = this.update.bind(this);
        this.bootstrap();
        this.resize();
        this.update();
    }
    Motor.prototype.bootstrap = function () {
        this.eventManager = new EventManager_1.default(this);
        this.entityManager = new EntityManager_1.default(this);
        this.systemManager = new SystemManager_1.default(this);
        this.assetManager = new AssetManager_1.default(this);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera();
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(0xdbe7ed);
        this.camera.position.set(4, 4, 4);
        this.camera.lookAt(new THREE.Vector3());
        if (this.options.debug) {
            this.scene.add(new THREE.AxesHelper(1));
        }
        if (this.options.controls) {
            this.controls = new orbit_controls_es6_1.default(this.camera, this.domElement);
        }
        this.domElement.appendChild(this.renderer.domElement);
        this.systemManager.addSystem(new Mesh_1.default(this));
        this.systemManager.addSystem(new Transform_1.default(this));
        this.systemManager.addSystem(new Sprite_1.default(this));
    };
    Motor.prototype.resize = function () {
        var width = this.domElement.clientWidth;
        var height = this.domElement.clientHeight;
        var aspect = width / height;
        this.camera.fov = 60;
        this.camera.aspect = aspect;
        this.camera.near = 0.1;
        this.camera.far = 1000;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    };
    Motor.prototype.update = function () {
        this.animationRequest = requestAnimationFrame(this.update);
        this.eventManager.emit(exports.UPDATE_START);
        this.systemManager.update();
        this.eventManager.emit(exports.UPDATE_END);
        this.renderer.render(this.scene, this.camera);
    };
    Motor.prototype.dispose = function () {
        this.renderer.domElement.remove();
        this.renderer.dispose();
        if (this.controls) {
            this.controls.dispose();
        }
        if (this.animationRequest) {
            cancelAnimationFrame(this.animationRequest);
        }
    };
    return Motor;
}());
exports.default = Motor;
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
//# sourceMappingURL=Motor.js.map