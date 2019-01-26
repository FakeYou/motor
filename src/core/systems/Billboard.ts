import System from './System';
import { Entity } from '../entity';
import { Sprite, Transform, Billboard } from '../components';

export default class BillboardSystem extends System {
	isMatch(entity: Entity): boolean {
		return this.entityHasComponents(entity, ['sprite', 'billboard']);
	}

	updateEntity(entity: Entity) {
		const { grounded } = this.getEntityComponent(entity, 'billboard') as Billboard;
		const { tile } = this.getEntityComponent(entity, 'sprite') as Sprite;

		if (tile) {
			const camera = this.motor.camera;

			if (grounded) {
				const look = camera.position.clone();
				look.sub(tile.position);
				look.x = 0;
				look.z = 0;

				tile.lookAt(camera.position.clone().sub(look));
			} else {
				tile.quaternion.copy(this.motor.camera.quaternion);
			}

			if (this.entityHasComponent(entity, 'transform')) {
				const { rotation } = this.getEntityComponent(entity, 'transform') as Transform;
				tile.rotation.x += rotation.x;
				tile.rotation.y += rotation.y;
				tile.rotation.z += rotation.z;
			}
		}
	}
}
