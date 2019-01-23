import System from './System';
import { Entity } from '../Entity';
import { Mesh } from '../components/Mesh';
import { Position } from '../components/Position';

export default class TranslationSystem extends System {
	isMatch(entity: Entity): boolean {
		return this.entityHasComponents(entity, ['position', 'mesh']);
	}

	updateEntity(entity: Entity) {
		const { mesh } = this.getEntityComponent(entity, 'mesh') as Mesh;
		const { x, y, z } = this.getEntityComponent(entity, 'position') as Position;

		mesh.position.set(x, y, z);
	}
}
