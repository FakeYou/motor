import * as THREE from 'three';

import System from './System';
import { Entity } from '../Entity';
import { Sprite } from '../components/sprite';
import { Geometry } from 'three';

export default class SpriteSystem extends System {
	static CORNERS = [
		[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
		[{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }]
	];

	isMatch(entity: Entity): boolean {
		return this.entityHasComponents(entity, ['sprite']);
	}

	addEntity(entity: Entity) {
		super.addEntity(entity);

		const sprite = this.getEntityComponent(entity, 'sprite') as Sprite;

		if (!sprite.tile) {
			const tile = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), sprite.spritesheet.material);
			sprite.tile = tile;
		}

		console.log(sprite);

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
		}
	}

	removeEntity(entity: Entity) {
		const sprite = this.getEntityComponent(entity, 'sprite') as Sprite;

		if (sprite.tile) {
			this.motor.scene.remove(sprite.tile);
		}
	}
}
