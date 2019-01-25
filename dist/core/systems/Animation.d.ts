import System from './System';
import { Entity } from '../Entity';
export default class AnimationSystem extends System {
    isMatch(entity: Entity): boolean;
    updateEntity(entity: Entity): void;
}
