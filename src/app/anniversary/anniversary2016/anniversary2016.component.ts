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
    private season: string;
    private images: Image[][];
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, private imageService: ImageService) {
    }

    public async ngOnInit(): Promise<void> {
        this.subscription = this.route.queryParams.subscribe((params: any) => {
            this.season = _.indexOf(['spring', 'summer', 'autumn', 'winter'], params.season) > -1 ?
                            params.season : null;
        });
        this.images = this.season ? await this.getSeasonImages(this.season) : null;
    }

    public ngOnDestroy(): void {
        // prevent memory leak
        this.subscription.unsubscribe();
    }

    private async getSeasonImages(season: string): Promise<Image[][]> {
        const numImagesPerRow = 5;
        const resource = await this.imageService.list({label: season});
        const images = _.chunk(resource, numImagesPerRow);

        return images;
    }
}
