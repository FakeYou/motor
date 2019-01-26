import * as THREE from 'three';

export type Sprite = {
	material: THREE.MeshBasicMaterial;
	size: THREE.Vector2;
	uv: THREE.Vector2;
};

export type Options = {
	tileWidth?: number;
	tileHeight?: number;
	columns?: number;
	rows?: number;
};

export default class Spritesheet {
	texture: THREE.Texture;
	material: THREE.MeshBasicMaterial;

	columns: number;
	rows: number;

	tileWidth: number;
	tileHeight: number;

	sprites: Array<Sprite>;

	static MARGIN = 0.001;

	constructor(texture: THREE.Texture, options: Options = {}) {
		this.texture = texture.clone();

		const { width, height } = this.texture.image;

		this.columns = options.columns || (!!options.tileWidth && width / options.tileWidth) || 1;
		this.rows = options.rows || (!!options.tileHeight && height / options.tileHeight) || 1;
		this.tileWidth = options.tileWidth || (!!options.rows && width / options.rows) || width;
		this.tileHeight =
			options.tileHeight || (!!options.columns && height / options.columns) || height;

		this.texture.magFilter = THREE.NearestFilter;
		this.texture.minFilter = THREE.NearestMipMapNearestFilter;
		this.texture.needsUpdate = true;

		this.material = new THREE.MeshBasicMaterial();
		this.material.map = this.texture;
		this.material.needsUpdate = true;
		this.material.transparent = true;
		this.material.alphaTest = 0.5;

		this.sprites = [];
		this.createSprites();
	}

	createSprites() {
		for (let y = 0; y < Math.floor(this.rows); y++) {
			for (let x = 0; x < Math.floor(this.columns); x++) {
				const uv = new THREE.Vector2(
					(x % this.columns) / this.columns + Spritesheet.MARGIN,
					1 - (y + 1) / this.rows + Spritesheet.MARGIN
				);

				const size = new THREE.Vector2(
					1 / this.columns - Spritesheet.MARGIN * 2,
					-1 / this.rows + Spritesheet.MARGIN * 2
				);

				this.sprites.push({
					material: this.material,
					uv,
					size
				});
			}
		}
	}

	sprite(index: number): Sprite {
		return this.sprites[index];
	}
}
