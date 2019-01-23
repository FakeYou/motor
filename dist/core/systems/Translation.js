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
var TranslationSystem = /** @class */ (function (_super) {
    __extends(TranslationSystem, _super);
    function TranslationSystem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TranslationSystem.prototype.isMatch = function (entity) {
        return this.entityHasComponents(entity, ['position', 'mesh']);
    };
    TranslationSystem.prototype.updateEntity = function (entity) {
        var mesh = this.getEntityComponent(entity, 'mesh').mesh;
        var _a = this.getEntityComponent(entity, 'position'), x = _a.x, y = _a.y, z = _a.z;
        mesh.position.set(x, y, z);
    };
    return TranslationSystem;
}(System_1.default));
exports.default = TranslationSystem;
//# sourceMappingURL=Translation.js.map