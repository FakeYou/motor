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
var BillboardSystem = /** @class */ (function (_super) {
    __extends(BillboardSystem, _super);
    function BillboardSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BillboardSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponents(entity, ['sprite', 'billboard']);
    };
    BillboardSystem.prototype.updateEntity = function (entity) {
        var grounded = this.getEntityComponent(entity, 'billboard').grounded;
        var tile = this.getEntityComponent(entity, 'sprite').tile;
        if (tile) {
            var camera = this.motor.camera;
            if (grounded) {
                var look = camera.position.clone();
                look.sub(tile.position);
                look.x = 0;
                look.z = 0;
                tile.lookAt(camera.position.clone().sub(look));
            }
            else {
                tile.quaternion.copy(this.motor.camera.quaternion);
            }
            if (this.entityHasComponent(entity, 'transform')) {
                var rotation = this.getEntityComponent(entity, 'transform').rotation;
                tile.rotation.x += rotation.x;
                tile.rotation.y += rotation.y;
                tile.rotation.z += rotation.z;
            }
        }
    };
    return BillboardSystem;
}(System_1.default));
exports.default = BillboardSystem;
//# sourceMappingURL=Billboard.js.map