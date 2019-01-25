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
var TransformSystem = /** @class */ (function (_super) {
    __extends(TransformSystem, _super);
    function TransformSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TransformSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponent(entity, 'transform');
    };
    TransformSystem.prototype.updateEntity = function (entity) {
        var _a = this.getEntityComponent(entity, 'transform'), position = _a.position, scale = _a.scale, rotation = _a.rotation;
        if (this.entityHasComponent(entity, 'mesh')) {
            var mesh = this.getEntityComponent(entity, 'mesh').mesh;
            mesh.position.copy(position);
            mesh.scale.copy(scale);
            mesh.rotation.copy(rotation);
        }
        if (this.entityHasComponent(entity, 'sprite')) {
            var tile = this.getEntityComponent(entity, 'sprite').tile;
            if (tile) {
                tile.position.copy(position);
                tile.scale.copy(scale);
                tile.rotation.copy(rotation);
            }
        }
    };
    return TransformSystem;
}(System_1.default));
exports.default = TransformSystem;
//# sourceMappingURL=Transform.js.map