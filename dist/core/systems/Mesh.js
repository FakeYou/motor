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
var MeshSystem = /** @class */ (function (_super) {
    __extends(MeshSystem, _super);
    function MeshSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MeshSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponents(entity, ['mesh']);
    };
    MeshSystem.prototype.addEntity = function (entity) {
        _super.prototype.addEntity.call(this, entity);
        var mesh = this.getEntityComponent(entity, 'mesh').mesh;
        this.motor.scene.add(mesh);
    };
    MeshSystem.prototype.removeEntity = function (entity) {
        _super.prototype.removeEntity.call(this, entity);
        var mesh = this.getEntityComponent(entity, 'mesh').mesh;
        this.motor.scene.remove(mesh);
    };
    return MeshSystem;
}(System_1.default));
exports.default = MeshSystem;
//# sourceMappingURL=Mesh.js.map