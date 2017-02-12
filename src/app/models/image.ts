export class Image {
    public _id        : string;
    public comment?   : string;
    public path       : string;
    public thumbnail? : string;

    constructor(obj: any) {
        this._id       = obj._id;
        this.comment   = obj.comment;
        this.path      = obj.path;
        this.thumbnail = obj.thumbnail;
    }
}
