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
            var animation = {
                name: tag.name,
                frames: frames,
                duration: frames.map(function (index) { return aseprite.frames[index].duration; }),
                direction: tag.direction
            };
            _this.animations[tag.name] = animation;
        });
    };
    Animations.prototype.animation = function (name) {
        return this.animations[name];
    };
    return Animations;
}());
exports.default = Animations;
//# sourceMappingURL=Animation.js.map