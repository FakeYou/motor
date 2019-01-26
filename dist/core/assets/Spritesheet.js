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
var Spritesheet = /** @class */ (function () {
    function Spritesheet(texture, options) {
        if (options === void 0) { options = {}; }
        this.texture = texture.clone();
        var _a = this.texture.image, width = _a.width, height = _a.height;
        this.columns = options.columns || (!!options.tileWidth && width / options.tileWidth) || 1;
        this.rows = options.rows || (!!options.tileHeight && height / options.tileHeight) || 1;
        this.tileWidth = options.tileWidth || (!!options.rows && width / options.rows) || width;
        this.tileHeight =
            options.tileHeight || (!!options.columns && height / options.columns) || height;
        this.texture.magFilter = THREE.NearestFilter;
        this.texture.minFilter = THREE.NearestMipMapNearestFilter;
        this.texture.needsUpdate = true;
        this.material = new THREE.MeshBasicMaterial();
        this.material.map = this.texture;
        this.material.needsUpdate = true;
        this.material.transparent = true;
        this.material.alphaTest = 0.5;
        this.sprites = [];
        this.createSprites();
    }
    Spritesheet.prototype.createSprites = function () {
        for (var y = 0; y < Math.floor(this.rows); y++) {
            for (var x = 0; x < Math.floor(this.columns); x++) {
                var uv = new THREE.Vector2((x % this.columns) / this.columns + Spritesheet.MARGIN, 1 - (y + 1) / this.rows + Spritesheet.MARGIN);
                var size = new THREE.Vector2(1 / this.columns - Spritesheet.MARGIN * 2, -1 / this.rows + Spritesheet.MARGIN * 2);
                this.sprites.push({
                    material: this.material,
                    uv: uv,
                    size: size
                });
            }
        }
    };
    Spritesheet.prototype.sprite = function (index) {
        return this.sprites[index];
    };
    Spritesheet.MARGIN = 0.001;
    return Spritesheet;
}());
exports.default = Spritesheet;
//# sourceMappingURL=Spritesheet.js.map