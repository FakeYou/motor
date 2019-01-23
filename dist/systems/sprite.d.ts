import Motor from '..';
import System from '../System';
interface Options {
    pixelScale?: number;
}
export default function createSpriteSystem(motor: Motor, options?: Options): System;
export {};
