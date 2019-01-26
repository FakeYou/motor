"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("../helpers");
var Animations = /** @class */ (function () {
    function Animations(spritesheet, options) {
        if (options === void 0) { options = {}; }
        this.spritesheet = spritesheet;
        this.animations = {};
        if (options.aseprite) {
            this.createAnimationsFromAseprite(options.aseprite);
        }
    }
    Animations.prototype.createAnimationsFromAseprite = function (aseprite) {
        var _this = this;
        aseprite.meta.frameTags.forEach(function (tag) {
            var frames = helpers_1.range(tag.from, tag.to);
            if (tag.direction === 'backward') {
                frames.reverse();
            }
            else if (tag.direction === 'pingpong') {
                var pong = helpers_1.range(tag.to - 1, tag.from + 1);
                frames.push.apply(frames, pong);
            }
            var time = 0;
            var timeline = frames.map(function (index) {
                time += aseprite.frames[index].duration;
                return time;
            });
            var animation = {
                name: tag.name,
                frames: frames,
                timeline: timeline,
                duration: time
            };
            console.log(animation);
            _this.animations[tag.name] = animation;
        });
    };
    Animations.prototype.animation = function (name) {
        return this.animations[name];
    };
    return Animations;
}());
exports.default = Animations;
//# sourceMappingURL=Animations.js.map