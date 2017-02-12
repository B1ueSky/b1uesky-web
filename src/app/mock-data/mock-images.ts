import * as _ from 'lodash';
import {Image} from "../models/image";

const resourceBase = '../assets/images/';

export const mockImages: {[key: string]: Image[]} = {
    winter: _.map(_.range(1, 36), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    }),
    spring: _.map(_.range(1, 36), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    }),
    summer: _.map(_.range(1, 36), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    }),
    autumn: _.map(_.range(1, 36), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    }),
    puzzle: _.map(_.range(1, 9), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    })
};
