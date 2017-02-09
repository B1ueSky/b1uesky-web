export class Image {
    public _id     : string;
    public path    : string;
    public comment?: string;

    constructor(obj: any) {
        this._id     = obj._id;
        this.path    = obj.path;
        this.comment = obj.comment;
    }
}
