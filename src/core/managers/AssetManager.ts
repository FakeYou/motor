import * as THREE from 'three';

import Motor from '../..';
import Spritesheet from '../assets/Spritesheet';
import JsonLoader from './loaders/JsonLoader';

export const LOAD_START = 'assets.load_start';
export const LOAD_END = 'assets.load_end';

export default class AssetManager {
	motor: Motor;

	assets: {
		[name: string]: THREE.Texture | THREE.Material | Spritesheet;
	};

	loadingManager: THREE.LoadingManager;
	textureLoader: THREE.TextureLoader;
	fileLoader: THREE.FileLoader;
	jsonLoader: JsonLoader;

	constructor(motor: Motor) {
		this.motor = motor;

		this.assets = {};

		this.loadingManager = new THREE.LoadingManager();

		this.loadingManager.onStart = () => {
			this.motor.eventManager.emit(LOAD_START);
		};
		this.loadingManager.onLoad = () => {
			this.motor.eventManager.emit(LOAD_END);
		};
		this.loadingManager.onError = url => {
			console.warn('Error loading assets', url);
		};

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

	loadSpritesheet(name: string, url: string, columns: number, rows: number) {
		this.textureLoader.load(url, texture => {
			this.assets[name] = new Spritesheet(texture, columns, rows);
		});
	}

	loadAseprite(name: string, image: string, meta: string) {
		this.textureLoader.load(image, texture => {
			this.jsonLoader.load(meta, json => {
				console.log(name, { texture, json });
			});
		});
	}
}
