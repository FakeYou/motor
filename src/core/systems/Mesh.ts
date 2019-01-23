import System from './System';
import { Entity } from '../Entity';
import { Mesh } from '../components/mesh';

export default class MeshSystem extends System {
	isMatch(entity: Entity): boolean {
		return this.entityHasComponents(entity, ['mesh']);
	}

	addEntity(entity: Entity) {
		super.addEntity(entity);

		const { mesh } = this.getEntityComponent(entity, 'mesh') as Mesh;

		this.motor.scene.add(mesh);
	}

	removeEntity(entity: Entity) {
		super.removeEntity(entity);

		const { mesh } = this.getEntityComponent(entity, 'mesh') as Mesh;

		this.motor.scene.remove(mesh);
	}
}
