import Spritesheet from './Spritesheet';
export declare type Animation = {
    name: string;
    frames: Array<number>;
    timeline: Array<number>;
    duration: number;
};
export declare type Options = {
    aseprite?: Aseprite;
};
declare type Aseprite = {
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
    constructor(spritesheet: Spritesheet, options?: Options);
    createAnimationsFromAseprite(aseprite: Aseprite): void;
    animation(name: string): Animation | undefined;
}
export {};
