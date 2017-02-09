import * as _ from 'lodash';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {ImageService} from "../../services/image.service";
import {Image} from "../../models/image";

@Component({
    selector: 'anniversary2016',
    providers: [ImageService],
    templateUrl: './anniversary2016.component.html',
    styleUrls: ['./anniversary2016.component.scss']
})
export class Anniversary2016Component implements OnInit, OnDestroy {
    private angle: number = 5;
    private canAccess: boolean = false;
    private images: Image[];
    private initSequence: number[];
    private isShuffled: boolean = false;
    private numImagesPerRow: number = 5;
    private season: string;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private imageService: ImageService) {
    }

    public async ngOnInit(): Promise<void> {
        this.subscription = this.route.queryParams.subscribe((params: any) => {
            if (!_.isEmpty(params.numImagesPerRow)) {
                this.numImagesPerRow = _.parseInt(params.numImagesPerRow);
            }
            if (!_.isEmpty(params.angle)) {
                this.angle = _.parseInt(params.angle);
            }
            if (!_.isEmpty(params.isShuffled) && params.isShuffled === 'true') {
                this.isShuffled = true;
            }
        });
        this.images = await this.getPuzzleImages();
        if (!this.season) {
            this.initSequence = [0, 1, 2, 3, 4, 5, 6, null, 7];
        }
        if (this.isShuffled) {
            this.images = _.shuffle(this.images);
        }
    }

    public ngOnDestroy(): void {
        // prevent memory leak
        this.subscription.unsubscribe();
    }

    private async getSeasonImages(season: string): Promise<Image[]> {
        return await this.imageService.list({label: season});
    }

    private async getPuzzleImages(): Promise<Image[]> {
        return await this.imageService.list({label: 'puzzle'});
    }

    private async onPuzzleSolved(solved: boolean) {
        this.canAccess = true;
        this.season = 'winter';
        this.images = await this.getSeasonImages(this.season);
    }
}
