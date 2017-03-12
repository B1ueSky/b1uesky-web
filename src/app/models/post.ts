export class Post {
    public _id?       : string;
    public content?   : string;
    public createdAt? : number;
    public filename?  : string;
    public title?     : string;
    public updatedAt? : number;
    public uri?       : string;

    constructor(obj: any) {
        this._id       = obj._id;
        this.content   = obj.content;
        this.createdAt = obj.createdAt;
        this.filename  = obj.filename;
        this.title     = obj.title;
        this.updatedAt = obj.updatedAt;
        this.uri       = obj.uri;
    }
}
