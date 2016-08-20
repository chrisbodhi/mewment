import expect from 'expect';

import { urlFormatter } from '../../app/modules/wishlist_helper';
import { AFFILIATE_CODE } from '../../app/config/CONSTANTS';

const displayedVal = 'fictional_wet_food|https://amzn.co/poiuytr';
const productName = 'Fictional Wet Food';
const productUrl = 'https://amzn.co/poiuytr';

expect(urlFormatter(displayedVal))
  .toEqual({ name: productName, url: `${productUrl}${AFFILIATE_CODE}` });
