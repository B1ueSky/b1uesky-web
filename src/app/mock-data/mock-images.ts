import * as _ from 'lodash';
import {Image} from "../models/image";

// const resourceBase = '../assets/images/';
const resourceBase = 'https://s3.amazonaws.com/b1uesky/';

export const mockImages: {[key: string]: Image[]} = {
    winter: _.map(_.range(1, 16), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'winter - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'winter - ' + num + '_tn.jpg'
        };
    }),
    spring: _.map(_.range(1, 103), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'spring - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'spring - ' + num + '_tn.jpg'
        };
    }),
    summer: _.map(_.range(1, 43), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'summer - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'summer - ' + num + '_tn.jpg'
        };
    }),
    autumn: _.map(_.range(1, 145), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    }),
    puzzle:[
        {
            _id: 'winter-4',
            path: resourceBase + 'anniversary/winter - 4.jpg',
            thumbnail: resourceBase + 'anniversary/winter - 4_tn.jpg'
        },
        {
            _id: 'winter-6',
            path: resourceBase + 'anniversary/winter - 6.jpg',
            thumbnail: resourceBase + 'anniversary/winter - 6_tn.jpg'
        },
        {
            _id: 'spring-3',
            path: resourceBase + 'anniversary/spring - 3.jpg',
            thumbnail: resourceBase + 'anniversary/spring - 3_tn.jpg'
        },
        {
            _id: 'spring-14',
            path: resourceBase + 'anniversary/spring - 14.jpg',
            thumbnail: resourceBase + 'anniversary/spring - 14_tn.jpg'
        },
        {
            _id: 'spring-49',
            path: resourceBase + 'anniversary/spring - 49.jpg',
            thumbnail: resourceBase + 'anniversary/spring - 49_tn.jpg'
        },
        {
            _id: 'summer-32',
            path: resourceBase + 'anniversary/summer - 32.jpg',
            thumbnail: resourceBase + 'anniversary/summer - 32_tn.jpg'
        },
        {
            _id: 'autumn-26',
            path: resourceBase + 'anniversary/autumn - 26.jpg',
            thumbnail: resourceBase + 'anniversary/autumn - 26_tn.jpg'
        },
        {
            _id: 'autumn-35',
            path: resourceBase + 'anniversary/autumn - 35.jpg',
            thumbnail: resourceBase + 'anniversary/autumn - 35_tn.jpg'
        },
    ]
};
