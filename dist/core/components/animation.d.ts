import Component from './component';
import Animations from '../assets/Animations';
export interface Animation extends Component {
    animations: Animations;
    tag: string;
}
export default function animation(animations: Animations, tag: string): Animation;
