import {
    Component,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import {Post} from '../../models/post';
import {
    ActivatedRoute,
    Params
} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {PostService} from '../../services/post.service';

@Component(
    {
        selector: 'app-post',
        templateUrl: './post.component.html',
        styleUrls: ['./post.component.scss'],
        encapsulation: ViewEncapsulation.None,
    }
)
export class PostComponent implements OnInit
{
    private post: Post;

    constructor(private postService: PostService, private route: ActivatedRoute) { }

    ngOnInit()
    {
        this.route.params.switchMap((params: Params) => this.postService.getPostByFilename(params['post']))
            .subscribe((post) => this.post = post);
    }
}
