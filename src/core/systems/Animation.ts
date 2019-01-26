import System from './System';
import { Entity } from '../entity';
import { Animation, Sprite } from '../components';

export default class AnimationSystem extends System {
	span: HTMLElement;

	isMatch(entity: Entity): boolean {
		return this.entityHasComponents(entity, ['sprite', 'animation']);
	}

	addEntity(entity: Entity) {
		this.span = document.createElement('span');
		document.body.appendChild(this.span);
		this.span.innerText = 'hello wolrd';
	}

	updateEntity(entity: Entity) {
		const { animations, tag } = this.getEntityComponent(entity, 'animation') as Animation;
		const sprite = this.getEntityComponent(entity, 'sprite') as Sprite;

		const now = Math.round(this.motor.clock.elapsedTime * 1000);
		const animation = animations.animation(tag);

		if (animation) {
			const delta = Math.round(now % animation.duration);
			let match = 0;
			let index = 0;

			for (index = 0; index < animation.timeline.length; index++) {
				if (animation.timeline[index] > delta) {
					break;
				}

				match = animation.timeline[index];
			}

			this.span.innerHTML = `match: ${match}<br>delta: ${delta}<br> now: ${now}<br> index: ${index}<br> frame: ${
				animation.frames[index]
			}`;

			sprite.index = animation.frames[index];
		}
	}
}
