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
    private season: number;
    private subscription: Subscription;
    private seasons: {[key: number]: {show: string, label: string}} = {
        100: {show: '冬', label: 'winter'},
        200: {show: '春', label: 'spring'},
        300: {show: '夏', label: 'summer'},
        400: {show: '秋', label: 'autumn'}
    };

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
        this.initSequence = [0, 4, 1, 3, null, 2, 6, 7, 5];
        if (this.isShuffled) {
            this.images = _.shuffle(this.images);
        }
    }

    public ngOnDestroy(): void {
        // prevent memory leak
        this.subscription.unsubscribe();
    }

    private async getSeasonImages(season: number): Promise<Image[]> {
        return await this.imageService.list({label: this.seasons[season].label});
    }

    private async getPuzzleImages(): Promise<Image[]> {
        return await this.imageService.list({label: 'puzzle'});
    }

    private async onPuzzleSolved(solved: boolean): Promise<void> {
        this.canAccess = true;
        this.season = 100;
        this.images = await this.getSeasonImages(this.season);
    }

    private async selectSeason(season: number): Promise<void> {
        if (season in this.seasons) {
            this.season = season;
            this.images = await this.getSeasonImages(this.season);
        }
    }
}
