import * as THREE from 'three';

import System from './System';
import { Entity } from '../entity';
import { Sprite } from '../components/sprite';
import { Geometry } from 'three';

export default class SpriteSystem extends System {
	static PIXEL_SCALE = 16;

	static CORNERS = [
		[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
		[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
	];

	isMatch(entity: Entity): boolean {
		return this.entityHasComponent(entity, 'sprite');
	}

	addEntity(entity: Entity) {
		const sprite = this.getEntityComponent(entity, 'sprite') as Sprite;

		if (!sprite.tile) {
			const { material, tileHeight, tileWidth } = sprite.spritesheet;

			sprite.tile = new THREE.Mesh(
				new THREE.PlaneGeometry(
					tileWidth / SpriteSystem.PIXEL_SCALE,
					tileHeight / SpriteSystem.PIXEL_SCALE
				),
				material
			);

			if (this.motor.options.debug) {
				sprite.tile.add(
					new THREE.Mesh(
						new THREE.PlaneGeometry(
							tileWidth / SpriteSystem.PIXEL_SCALE,
							tileHeight / SpriteSystem.PIXEL_SCALE
						),
						new THREE.MeshNormalMaterial({ wireframe: true })
					)
				);
			}
		}

		this.motor.scene.add(sprite.tile);
	}

	updateEntity(entity: Entity) {
		const { spritesheet, tile, index } = this.getEntityComponent(entity, 'sprite') as Sprite;
		const sprite = spritesheet.sprite(index);

		if (sprite && tile) {
			tile.material = sprite.material;
			(tile.geometry as Geometry).faceVertexUvs[0].forEach((face, i) => {
				face.forEach((corner, j) => {
					const signX = SpriteSystem.CORNERS[i][j].x;
					const signY = SpriteSystem.CORNERS[i][j].y;

					corner.x = sprite.uv.x + sprite.size.x * signX;
					corner.y = sprite.uv.y - sprite.size.y * signY;
				});
			});

			(tile.geometry as Geometry).uvsNeedUpdate = true;
		}
	}

	removeEntity(entity: Entity) {
		const sprite = this.getEntityComponent(entity, 'sprite') as Sprite;

		if (sprite.tile) {
			this.motor.scene.remove(sprite.tile);
		}
	}
}
