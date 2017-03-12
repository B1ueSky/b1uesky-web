import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {Http} from '@angular/http';

@Injectable()
export class PostService
{
    private resourceBase = 'https://s3.amazonaws.com/b1uesky/bs-zone/';
    private posts: {[key: string]: Post} = {
        'deploy-angular-2-to-aws-s3.md': {
            title: 'How to Deploy Angular 2 App to AWS S3',
            filename: 'deploy-angular-2-to-aws-s3.md',
        }
    };

    constructor(private http: Http) { }

    public async list(query?: any): Promise<Post[]>
    {
        return Promise.resolve(_.values(this.posts));
    }

    public async getPostByFilename(filename: string)
    {
        let post: Post = _.extend(
            new Post(this.posts[filename] || {}), {
                uri: this.resourceBase + filename,
                createdAt: new Date().getTime(),
            }
        );

        return Promise.resolve(post);
    }
}
