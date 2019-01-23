import Component from './component';

export interface Position extends Component {
	x: number;
	y: number;
	z: number;
}

export default function Position(x: number, y: number, z: number): Position {
	return {
		name: 'position',
		x,
		y,
		z
	};
}
