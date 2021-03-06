import System from './System';
import { Entity } from '../entity';
export default class AnimationSystem extends System {
    span: HTMLElement;
    isMatch(entity: Entity): boolean;
    addEntity(entity: Entity): void;
    updateEntity(entity: Entity): void;
}
