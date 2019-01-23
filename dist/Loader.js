"use strict";
// import * as THREE from 'three';
// import Motor from './Motor';
// import Aseprite from './assets/Aseprite';
// class Loader {
// 	motor: Motor;
// 	isLoading: boolean;
// 	constructor(motor: Motor) {
// 		this.motor = motor;
// 		this.isLoading = false;
// 	}
// 	async loadAseprite(name: string, imageUrl: string, dataUrl: string) {
// 		const [image, data] = await Promise.all([this.load(imageUrl), this.load(dataUrl)]);
// 		const aseprite = new Aseprite(image, data);
// 		console.log(aseprite);
// 		const texture = new THREE.Texture();
// 		texture.image = image;
// 		texture.needsUpdate = true;
// 		texture.magFilter = THREE.NearestFilter;
// 		texture.minFilter = THREE.NearestMipMapNearestFilter;
// 		const material = new THREE.MeshBasicMaterial();
// 		material.map = texture;
// 		material.needsUpdate = true;
// 		material.userData = data;
// 		this.motor.assets[name] = material;
// 		return material;
// 	}
// 	async loadTiled(name: string, dataUrl: string) {
// 		const data = await this.load(dataUrl);
// 		console.log(data);
// 	}
// 	load(url: string) {
// 		if (url.endsWith('.json')) {
// 			return fetch(url).then(response => response.json());
// 		}
// 		if (url.endsWith('.png')) {
// 			return fetch(url)
// 				.then(response => response.blob())
// 				.then(Loader.blobToImage);
// 		}
// 		return fetch(url);
// 	}
// 	static blobToImage(blob: Blob) {
// 		const url = window.URL.createObjectURL(blob);
// 		const image = new Image();
// 		image.src = url;
// 		return image;
// 	}
// }
// export default Loader;
//# sourceMappingURL=Loader.js.map