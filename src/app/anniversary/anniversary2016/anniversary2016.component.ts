import * as _ from 'lodash';
import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-anniversary2016',
    templateUrl: './anniversary2016.component.html',
    styleUrls: ['./anniversary2016.component.scss']
})
export class Anniversary2016Component implements OnInit, OnDestroy {
    private season: string;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute) {
    }

    public ngOnInit(): void {
        this.subscription = this.route.queryParams.subscribe((params: any) => {
            this.season = _.indexOf(['spring', 'summer', 'autumn', 'winter'], params.season) > -1 ?
                            params.season : null;
        });
    }

    public ngOnDestroy(): void {
        // prevent memory leak
        this.subscription.unsubscribe();
    }

}
