import System from './System';
import { Entity } from '../Entity';
import { Mesh } from '../components/mesh';
import { Transform } from '../components/transform';
import { Sprite } from '../components/sprite';

export default class TransformSystem extends System {
	isMatch(entity: Entity): boolean {
		return this.entityHasComponent(entity, 'transform');
	}

	updateEntity(entity: Entity) {
		const { position, scale, rotation } = this.getEntityComponent(entity, 'transform') as Transform;

		if (this.entityHasComponent(entity, 'mesh')) {
			const { mesh } = this.getEntityComponent(entity, 'mesh') as Mesh;
			mesh.position.copy(position);
			mesh.scale.copy(scale);
			mesh.rotation.copy(rotation);
		}

		if (this.entityHasComponent(entity, 'sprite')) {
			const { tile } = this.getEntityComponent(entity, 'sprite') as Sprite;

			if (tile) {
				tile.position.copy(position);
				tile.scale.copy(scale);
				tile.rotation.copy(rotation);
			}
		}
	}
}
