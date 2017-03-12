import {
    Component,
    OnInit
} from '@angular/core';

@Component(
    {
        selector: 'home',
        templateUrl: './home.component.html',
        styleUrls: ['./home.component.scss']
    }
)
export class HomeComponent implements OnInit
{
    private resume: string;
    private slogan: [string];
    private sloganShow: [string];
    private sloganIdx: number;
    private charIdx: number;
    private isInWord: boolean;
    private charInterval: number;
    private wordInterval: number;
    private sentenceInterval: number;

    constructor()
    {
        this.resume = 'https://s3.amazonaws.com/b1uesky/bs-zone/tianyou-luo-resume.pdf';
        this.slogan = [
            'IF YOU WANT TO GO FAST, WALK ALONE;',
            'IF YOU WANT TO GO FAR,',
            'WALK TOGETHER',
            '.'
        ];
        this.sloganShow = [
            '',
            '',
            '',
            ''
        ];
        this.sloganIdx = 0;
        this.charIdx = 0;
        this.isInWord = true;
        this.charInterval = 40;
        this.wordInterval = 300;
        this.sentenceInterval = 800;
    }

    public ngOnInit()
    {
        this.printSlogan();
    }

    private printSlogan()
    {
        // the current line is finished, go to the next line.
        if (this.sloganIdx < this.slogan.length && this.charIdx >= this.slogan[this.sloganIdx].length) {
            this.sloganIdx++;
            this.charIdx = 0;
            this.isInWord = true;
            setTimeout(
                () =>
                {
                    this.printSlogan();
                }, this.sentenceInterval
            );
            return;
        }

        // all lines are finished.
        if (this.sloganIdx >= this.slogan.length) {
            return;
        }

        const c = this.slogan[this.sloganIdx].charAt(this.charIdx);
        this.sloganShow[this.sloganIdx] += c;
        this.charIdx++;
        this.isInWord = c !== ' ';
        setTimeout(
            () =>
            {
                this.printSlogan();
            }, this.isInWord ? this.charInterval : this.wordInterval
        );
    }
}
