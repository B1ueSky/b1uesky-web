import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    private resume: string;

    constructor() {
        this.resume = 'https://s3.amazonaws.com/b1uesky/bs-zone/resume-030317.pdf';
    }

    ngOnInit() {
    }

}
