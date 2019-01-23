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
var component_1 = __importDefault(require("./component"));
var Plane = /** @class */ (function (_super) {
    __extends(Plane, _super);
    function Plane(width, height) {
        var _this = _super.call(this) || this;
        _this.name = 'plane';
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Plane;
}(component_1.default));
exports.default = Plane;
//# sourceMappingURL=Plane.js.map