import expect from 'expect';

import { formValFormatter } from '../../app/modules/wishlist_helper';
import { AFFILIATE_CODE } from '../../app/config/CONSTANTS';

const displayedVal = 'food|fictional_wet_food|https://amzn.co/poiuytr';
const category = 'Food';
const productName = 'Fictional Wet Food';
const productUrl = 'https://amzn.co/poiuytr';

expect(formValFormatter(displayedVal)).toEqual({
  category,
  name: productName,
  url: `${productUrl}${AFFILIATE_CODE}`
});
