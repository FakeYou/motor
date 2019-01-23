import System from './System';
import { Entity } from '../Entity';
export default class MeshSystem extends System {
    isMatch(entity: Entity): boolean;
    addEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
}
