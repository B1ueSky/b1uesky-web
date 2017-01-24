import * as _ from 'lodash';
import {Image} from "../models/image";

const resourceBase = '../assets/images/';

export const mockImages: {[key: string]: Image[]} = {
    autumn: _.map(_.range(1, 113), (num): Image => {
        return {
            _id: num.toString(),
            path: resourceBase + 'anniversary/' + 'autumn - ' + num + '.jpg'
        };
    })
};
