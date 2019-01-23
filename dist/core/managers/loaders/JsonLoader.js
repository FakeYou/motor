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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var JsonLoader = /** @class */ (function (_super) {
    __extends(JsonLoader, _super);
    function JsonLoader(manager) {
        if (manager === void 0) { manager = new THREE.LoadingManager(); }
        var _this = _super.call(this) || this;
        _this.manager = manager;
        return _this;
    }
    JsonLoader.prototype.load = function (url, onLoad, onProgress, onError) {
        var loader = new THREE.FileLoader(this.manager);
        loader.load(url, function (raw) {
            var json = undefined;
            try {
                json = JSON.parse(raw);
            }
            catch (e) {
                console.warn(e);
            }
            if (onLoad) {
                onLoad(json);
            }
        }, onProgress, onError);
    };
    return JsonLoader;
}(THREE.Loader));
exports.default = JsonLoader;
//# sourceMappingURL=JsonLoader.js.map