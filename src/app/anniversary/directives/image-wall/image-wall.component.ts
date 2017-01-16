import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'image-wall',
    templateUrl: './image-wall.component.html',
    styleUrls: ['./image-wall.component.scss']
})
export class ImageWallComponent implements OnInit {
    @Input() private season: string;
    @Input() private images: string[];

    constructor() {
    }

    ngOnInit() {
    }

}
