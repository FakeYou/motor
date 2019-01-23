"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __importStar(require("three"));
var Aseprite = /** @class */ (function () {
    function Aseprite(image, data) {
        console.log(data);
        this.image = image;
        this.frames = data.frames;
        this.tileWidth = data.meta.size.w;
        this.tileHeight = data.meta.size.h;
        this.texture = new THREE.Texture();
        this.texture.image = image;
        this.texture.needsUpdate = true;
        this.texture.magFilter = THREE.NearestFilter;
        this.texture.minFilter = THREE.NearestMipMapNearestFilter;
        this.material = new THREE.MeshBasicMaterial();
        this.material.map = this.texture;
        this.material.needsUpdate = true;
    }
    Aseprite.prototype.setTileSize = function (width, height) {
        this.tileWidth = width;
        this.tileHeight = height;
    };
    Aseprite.prototype.getFrame = function (frame) {
        console.log(frame);
        return [this.texture];
    };
    return Aseprite;
}());
exports.default = Aseprite;
//# sourceMappingURL=Aseprite.js.map