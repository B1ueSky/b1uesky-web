export class Post {
    public _id?       : string;
    public content    : string;
    public createdAt? : number;
    public title?     : string;
    public updatedAt? : number;

    constructor(obj: any) {
        this._id       = obj._id;
        this.content   = obj.content;
        this.createdAt = obj.createdAt;
        this.title     = obj.title;
        this.updatedAt = obj.updatedAt;
    }
}
