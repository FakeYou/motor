import Spritesheet from './Spritesheet';
import { range } from '../helpers';

export type Animation = {
	name: string;
	frames: Array<number>;
	timeline: Array<number>;
	duration: number;
};

export type Options = {
	aseprite?: Aseprite;
};

type Aseprite = {
	frames: Array<{
		frame: {
			x: number;
			y: number;
			w: number;
			h: number;
		};
		duration: number;
	}>;
	meta: {
		size: {
			w: number;
			h: number;
		};
		frameTags: Array<{
			name: string;
			from: number;
			to: number;
			direction: 'forward' | 'backward' | 'pingpong';
		}>;
	};
};

export default class Animations {
	spritesheet: Spritesheet;

	animations: {
		[name: string]: Animation;
	};

	constructor(spritesheet: Spritesheet, options: Options = {}) {
		this.spritesheet = spritesheet;
		this.animations = {};

		if (options.aseprite) {
			this.createAnimationsFromAseprite(options.aseprite);
		}
	}

	createAnimationsFromAseprite(aseprite: Aseprite) {
		aseprite.meta.frameTags.forEach(tag => {
			const frames = range(tag.from, tag.to);

			if (tag.direction === 'backward') {
				frames.reverse();
			} else if (tag.direction === 'pingpong') {
				const pong = range(tag.to - 1, tag.from + 1);
				frames.push(...pong);
			}

			let time = 0;
			const timeline = frames.map(index => {
				time += aseprite.frames[index].duration;
				return time;
			});

			const animation = {
				name: tag.name,
				frames,
				timeline,
				duration: time
			};

			console.log(animation);

			this.animations[tag.name] = animation;
		});
	}

	animation(name: string): Animation | undefined {
		return this.animations[name];
	}
}
