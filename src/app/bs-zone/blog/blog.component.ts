import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component(
    {
        selector: 'app-blog',
        templateUrl: './blog.component.html',
        styleUrls: [
            './blog.component.scss',
        ]
    }
)
export class BlogComponent implements OnInit
{
    private posts: Post[];

    constructor(private postService: PostService)
    {
    }

    public async ngOnInit()
    {
        this.posts = await this.postService.list();
    }
}
