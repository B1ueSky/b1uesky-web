import * as _ from 'lodash';
import {Injectable} from '@angular/core';
import {Post} from '../models/post';
import {
    Response,
    Http,
} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostService
{
    private resourceBase = '/assets/markdowns/';
    private posts: string[] = [
        'deploy-angular-2-to-aws-s3.md',
    ];

    constructor(private http: Http) { }

    public async list(query?: any): Promise<Post[]>
    {
        const promises: Promise<Response>[] = _.map(
            this.posts, (postPath) => (this.http.get(this.resourceBase + postPath).toPromise())
        );
        const responses: Response[] = await Promise.all<Response>(promises);

        return _.map<Post[]>(responses, (res: Response) => ({content: res.text()}));
    }
}
