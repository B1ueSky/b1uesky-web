import * as _ from 'lodash';
import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Image} from "../../../models/image";

@Component({
    selector: 'square-puzzle',
    templateUrl: './square-puzzle.component.html',
    styleUrls: ['./square-puzzle.component.scss']
})
export class SquarePuzzleComponent implements OnInit {
    // images that are in correct ascending order.
    @Input() private images: Image[];

    // the initial sequence of index of images. When the images are moved from initial sequence to the
    // correct ascending order, the puzzle is considered to be solved.
    @Input() private initSequence: number[];

    // Event emitter which emits a true boolean value when puzzle is solved.
    @Output() onSolved = new EventEmitter<boolean>();

    // the images display in square in 2D.
    private images2D: Image[][];
    // the number of columns of the square.
    private numCols: number;
    // the empty cell.
    private emptyCell: Image = {_id: 'empty', path:''};
    private emptyCellIndex;

    constructor() {
    }

    ngOnChanges() {
        if (_.isEmpty(this.images)) return;

        this.chunkImagesTo2D();
    }

    ngOnInit() {
    }

    private moveCell(cellIndex): void {
        switch (this.emptyCellIndex) {
            case cellIndex-1:   // move cell to the left
                SquarePuzzleComponent.swap(this.initSequence, this.emptyCellIndex, cellIndex);
                break;
            case cellIndex+1:   // move cell to the right
                SquarePuzzleComponent.swap(this.initSequence, this.emptyCellIndex, cellIndex);
                break;
            case cellIndex-3:   // move cell up
                SquarePuzzleComponent.swap(this.initSequence, this.emptyCellIndex, cellIndex);
                break;
            case cellIndex+3:   // move cell down
                SquarePuzzleComponent.swap(this.initSequence, this.emptyCellIndex, cellIndex);
                break;
        }
        this.chunkImagesTo2D();

        // test if the puzzle is solved.
        if (this.isPuzzleSolved()) {
            this.onSolved.emit(true);
        }
    }

    private chunkImagesTo2D() {
        this.numCols = _.toInteger(Math.sqrt(this.images.length + 1));   // 9-square puzzle only has 8 cells.
        if (this.numCols * this.numCols !== this.images.length+1) {
            console.log('Warning: number of images in square puzzle doesn\'t form a square.');
        }

        // map the images to initial sequence order.
        if (this.images.length+1 !== this.initSequence.length) {
            console.log('Error: number of images doesn\'t match the length of initSequence!');
        }
        this.images2D = _.chunk(_.map(this.initSequence, (position, index): Image => {
            if (position !== null && position !== -1) {
                return this.images[position];
            }
            this.emptyCellIndex = index;
            return this.emptyCell;
        }) as Image[], this.numCols);

        // If the number of images doesn't form a square, then just get the first n*n images.
        if (this.images2D[this.images2D.length-1].length != this.numCols) {
            this.images2D = _.take(this.images2D, this.numCols) as Image[][];
        }
    }

    // swap two elements in an array, without any check!
    private static swap(arr, indexA, indexB): void {
        const temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }

    private isPuzzleSolved(): boolean {
        return _.isEqual(_.sortBy(this.initSequence), this.initSequence);
    }
}
