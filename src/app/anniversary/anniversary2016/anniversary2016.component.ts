import * as _ from 'lodash';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'anniversary2016',
    templateUrl: './anniversary2016.component.html',
    styleUrls: ['./anniversary2016.component.scss']
})
export class Anniversary2016Component implements OnInit, OnDestroy {
    private season: string;
    private images: string[];
    private subscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.subscription = this.route.queryParams.subscribe((params: any) => {
            this.season = _.indexOf(['spring', 'summer', 'autumn', 'winter'], params.season) > -1 ?
                            params.season : null;
            this.images = this.getSeasonImages(this.season);
        });
    }

    public ngOnDestroy(): void {
        // prevent memory leak
        this.subscription.unsubscribe();
    }

    private getSeasonImages(season: string): string[] {
        const imageMap = {
            'spring': ['spring0'],
            'summer': ['summer0', 'summer1'],
            'autumn': ['autumn0', 'autumn1', 'autumn2'],
            'winter': ['winter0', 'winter1', 'winter2', 'winter3']
        }

        return imageMap[season];
    }
}
