import {Injectable} from '@angular/core';
import {Image} from "../models/image";
import {mockImages} from "../mock-data/mock-images";

@Injectable()
export class ImageService
{
    constructor() { }

    public async list(query: any): Promise<Image[]>
    {
        const label = query.label;
        return Promise.resolve(mockImages[label]);
    }
}
