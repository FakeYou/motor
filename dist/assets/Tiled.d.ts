declare type Data = {
    height: number;
    width: number;
    infinite: boolean;
    tileheight: number;
    tilewidth: number;
};
declare class Tiled {
    height: number;
    width: number;
    infinite: boolean;
    tileHeight: number;
    tileWidth: number;
    constructor(data: Data);
}
export default Tiled;
