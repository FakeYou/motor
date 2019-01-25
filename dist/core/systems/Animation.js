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
        return this.entityHasComponents(entity, ['animation']);
    };
    AnimationSystem.prototype.updateEntity = function (entity) {
        var animation = this.getEntityComponent(entity, 'animation').animation;
    };
    return AnimationSystem;
}(System_1.default));
exports.default = AnimationSystem;
//# sourceMappingURL=Animation.js.map