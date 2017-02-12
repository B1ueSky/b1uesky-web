import * as _ from 'lodash';
import {Image} from "../models/image";

const resourceBase = '../assets/images/';

export const mockImages: {[key: string]: Image[]} = {
    winter: _.map(_.range(1, 114), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    }),
    spring: _.map(_.range(1, 114), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    }),
    summer: _.map(_.range(1, 114), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    }),
    autumn: _.map(_.range(1, 114), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    }),
    puzzle: _.map(_.range(1, 9), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg',
            thumbnail: resourceBase + 'anniversary/' + 'autumn - ' + num + '_tn.jpg'
        };
    })
};
