import System from './System';
import { Entity } from '../entity';
export default class SpriteSystem extends System {
    static PIXEL_SCALE: number;
    static CORNERS: {
        x: number;
        y: number;
    }[][];
    isMatch(entity: Entity): boolean;
    addEntity(entity: Entity): void;
    updateEntity(entity: Entity): void;
    removeEntity(entity: Entity): void;
}
