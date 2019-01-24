import System from './System';
import { Entity } from '../Entity';
export default class SpriteSystem extends System {
    static CORNERS: {
        x: number;
        y: number;
    }[][];
    isMatch(entity: Entity): boolean;
    addEntity(entity: Entity): void;
    updateEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
}
