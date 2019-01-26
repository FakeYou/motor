import Component from './component';

export interface Billboard extends Component {
	grounded: boolean;
}

export default function billboard(grounded?: boolean): Billboard {
	return {
		name: 'billboard',
		grounded: !!grounded
	};
}
