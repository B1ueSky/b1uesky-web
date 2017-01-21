import * as _ from 'lodash';
import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'image-wall',
    templateUrl: './image-wall.component.html',
    styleUrls: ['./image-wall.component.scss']
})
export class ImageWallComponent implements OnInit {
    @Input() private season: string;
    @Input() private images: string[][];
    private allImages: string[];

    constructor() {
    }

    ngOnInit() {
        this.images = [
            [
                'http://www.newsofbahrain.com/admin/post/upload/000PST_31-03-2016_1459426231_bYViJTGH2j.jpg',
                'http://www.hdwallpaperspop.com/wp-content/uploads/2016/09/beautiful-girl-hd-wallpaper-for-walls.jpg',
                'http://images6.fanpop.com/image/photos/37600000/The-most-beautiful-girl-at-world-beautiful-pictures-37694196-375-500.jpg',
                'http://onehdwallpaper.com/wp-content/uploads/2016/11/Beautiful-Cute-Girl-Smile-HD-Wallpaper.jpg',
                'https://driving-art.info/uploads/23/35948090-beautiful-girl-image.jpg',
            ],
            [
                'http://www.wonderslist.com/wp-content/uploads/2015/10/Doutzen-Kroes-Most-Beautiful-Dutch-Woman.jpg',
                'http://www.qygjxz.com/data/out/124/3898670-images-of-beautiful-girl.jpg',
                'http://onehdwallpaper.com/wp-content/uploads/2016/11/Beautiful-Girl-Wallpaper-in-FUll-HD.jpg',
                'http://onehdwallpaper.com/wp-content/uploads/2016/11/World-Beautiful-Girls-Images-Free-Download.jpg',
                'http://hdpic.org/wp-content/uploads/2015/02/beautiful-girl-Fascinating-Wallpaper-Exquisite-Free-Picture.jpg',
            ],
            [
                'http://www.ultrahighdefinitionwallpapers.com/wp-content/uploads/2015/04/beautiful-girl-uhd-wallpapers.jpg',
                'http://eskipaper.com/images/beautiful-girls-18.jpg',
                'http://www.newsread.in/wp-content/uploads/2016/06/Most-Beautiful-Girl-In-The-World-9.jpg',
                'https://s-media-cache-ak0.pinimg.com/736x/6f/90/73/6f907335b64627973370548e9d2ef00e.jpg',
                'http://www.wallpaperscharlie.com/wp-content/uploads/2016/09/Beautiful-Girl-Image-3.jpg',
            ],
            [
                'http://onehdwallpaper.com/wp-content/uploads/2015/11/Most-Beautiful-Girl-in-Flowers-Field.jpg',
                'http://www.lovethispic.com/uploaded_images/34085-Beautiful-Girl.jpg',
                'http://eskipaper.com/images/beautiful-girl-mood-wallpaper-2.jpg',
                'http://eskipaper.com/images/beautiful-girls-30.jpg',
                'http://www.wonderslist.com/wp-content/uploads/2015/04/Deepika-Padukone-Beautiful-Women-of-2015.jpg',
            ],
            [
                'http://www.proprofs.com/api/ckeditor_images/1908073(2).jpg',
                'http://onehdwallpaper.com/wp-content/uploads/2015/11/Most-Beautiful-Girl-With-Flowers-HD-Wallpapers.jpg',
                'https://i.ytimg.com/vi/TLcf_DXT_xw/maxresdefault.jpg',
                'http://previews.123rf.com/images/aleshyn/aleshyn1210/aleshyn121000050/15720986-beautiful-girl-in-the-street-Stock-Photo-girl-sad-lonely.jpg',
                'http://dawallpaper.com/wp-content/uploads/2015/01/school-beautiful-girl-800x600.jpg'
            ],
        ];
        this.allImages = _.flattenDeep(this.images) as string[];
    }

    public styleImage() {
        const angle = _.random(-5, 5);
        return {
            'transform': 'translate(-50%, -50%) rotate(' + angle + 'deg) ',
            '-webkit-transform': 'translate(-50%, -50%) rotate(' + angle + 'deg) ',
            'left': '50%',
            'top': '50%',
        };
    }
}
