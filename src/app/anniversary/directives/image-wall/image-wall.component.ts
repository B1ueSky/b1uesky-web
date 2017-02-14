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

    private popupImageIdx: number;

    constructor() {
    }

    ngOnChanges() {
        if (_.isNumber(this.angleRange)) {
            this.angleRange = [-this.angleRange, this.angleRange];
        }
    }

    ngOnInit() {
    }

    private styleImageWall(): {[key: string]: string} {
        return {
            // because each image wall item occupies 130px
            'max-width': this.numCols * 130 + 'px'
        }
    }

    private styleImageWallItem(): {[key: string]: string} {
        const angle = _.random(this.angleRange[0], this.angleRange[1]);
        return {
            'transform': 'rotate(' + angle + 'deg) ',
            '-webkit-transform': 'rotate(' + angle + 'deg) ',
        };
    }

    private popupImageModal(imageIdx: number): void {
        this.popupImageIdx = imageIdx;
    }

    private closeModal(): void {
        this.popupImageIdx = -1;
    }

    private moveToLastImage(): void {
        this.popupImageIdx--;
    }

    private moveToNextImage(): void {
        this.popupImageIdx++;
    }
}
