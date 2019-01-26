"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var System_1 = __importDefault(require("./System"));
var AnimationSystem = /** @class */ (function (_super) {
    __extends(AnimationSystem, _super);
    function AnimationSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponents(entity, ['sprite', 'animation']);
    };
    AnimationSystem.prototype.addEntity = function (entity) {
        this.span = document.createElement('span');
        document.body.appendChild(this.span);
        this.span.innerText = 'hello wolrd';
    };
    AnimationSystem.prototype.updateEntity = function (entity) {
        var _a = this.getEntityComponent(entity, 'animation'), animations = _a.animations, tag = _a.tag;
        var sprite = this.getEntityComponent(entity, 'sprite');
        var now = Math.round(this.motor.clock.elapsedTime * 1000);
        var animation = animations.animation(tag);
        if (animation) {
            var delta = Math.round(now % animation.duration);
            var match = 0;
            var index = 0;
            for (index = 0; index < animation.timeline.length; index++) {
                if (animation.timeline[index] > delta) {
                    break;
                }
                match = animation.timeline[index];
            }
            this.span.innerHTML = "match: " + match + "<br>delta: " + delta + "<br> now: " + now + "<br> index: " + index + "<br> frame: " + animation.frames[index];
            sprite.index = animation.frames[index];
        }
    };
    return AnimationSystem;
}(System_1.default));
exports.default = AnimationSystem;
//# sourceMappingURL=Animation.js.map