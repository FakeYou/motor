import * as THREE from 'three';

import Motor from '../..';
import Spritesheet, { Options as SpritesheetOptions } from '../assets/Spritesheet';
import Animations from '../assets/Animations';
import JsonLoader from './loaders/JsonLoader';

export const LOAD_START = 'assets.load_start';
export const LOAD_END = 'assets.load_end';

export default class AssetManager {
	motor: Motor;

	assets: {
		[name: string]: THREE.Texture | THREE.Material | Spritesheet | Animations;
	};

	loadingManager: THREE.LoadingManager;
	textureLoader: THREE.TextureLoader;
	fileLoader: THREE.FileLoader;
	jsonLoader: JsonLoader;

	constructor(motor: Motor) {
		this.motor = motor;

		this.assets = {};

		this.loadingManager = new THREE.LoadingManager();

		this.loadingManager.onStart = () => this.motor.eventManager.emit(LOAD_START);
		this.loadingManager.onLoad = () => this.motor.eventManager.emit(LOAD_END);
		this.loadingManager.onError = url => console.warn('Error loading assets', url);

		this.textureLoader = new THREE.TextureLoader(this.loadingManager);
		this.fileLoader = new THREE.FileLoader(this.loadingManager);
		this.jsonLoader = new JsonLoader(this.loadingManager);
	}

	loadTexture(name: string, url: string) {
		this.textureLoader.load(url, texture => {
			this.assets[name] = texture;
		});
	}

	loadSprite(name: string, url: string) {
		this.textureLoader.load(url, texture => {
			texture.magFilter = THREE.NearestFilter;
			texture.minFilter = THREE.NearestMipMapNearestFilter;

			const material = new THREE.MeshBasicMaterial();
			material.map = texture;

			this.assets[name] = material;
		});
	}

	loadSpritesheet(name: string, url: string, options: SpritesheetOptions) {
		this.textureLoader.load(url, texture => {
			this.assets[name] = new Spritesheet(texture, options);
		});
	}

	async loadAseprite(name: string, image: string, meta: string) {
		const [texture, aseprite] = await Promise.all([
			this.load(this.textureLoader, image),
			this.load(this.jsonLoader, meta)
		]);

		this.assets[name] = new Animations(texture, { aseprite });
	}

	load(loader: any, url: string): Promise<any> {
		return new Promise((resolve, reject) => {
			loader.load(url, resolve, undefined, reject);
		});
	}
}
