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
    function Spritesheet(texture, columns, rows) {
        this.texture = texture.clone();
        this.columns = columns;
        this.rows = rows;
        this.tileWidth = this.texture.image.width / this.columns;
        this.tileHeight = this.texture.image.height / this.rows;
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
        for (var y = 0; y < this.columns; y++) {
            for (var x = 0; x < this.rows; x++) {
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