import * as _ from 'lodash';
import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Image} from "../../../models/image";

@Component({
    selector: 'image-wall',
    templateUrl: './image-wall.component.html',
    styleUrls: ['./image-wall.component.scss']
})
export class ImageWallComponent implements OnInit {
    @Input() private images: Image[];
    @Input() private numCols: number = 5;
    @Input() private angleRange: number | [number, number] = 5;

    private images2D: Image[][];
    private popupImage: Image;

    constructor() {
    }

    ngOnChanges() {
        if (_.isNumber(this.angleRange)) {
            this.angleRange = [-this.angleRange, this.angleRange];
        }
        this.images2D = _.chunk(this.images, this.numCols);
    }

    ngOnInit() {
    }

    private styleImageWallItem(): {[key: string]: string} {
        const angle = _.random(this.angleRange[0], this.angleRange[1]);
        return {
            'transform': 'rotate(' + angle + 'deg) ',
            '-webkit-transform': 'rotate(' + angle + 'deg) ',
        };
    }

    private zoomInImage(image: Image): void {
        this.popupImage = image;
    }

    private closeModal(): void {
        this.popupImage = null;
    }
}
