import _ from 'lodash';
import { AFFILIATE_CODE } from '../config/CONSTANTS';

export function formValFormatter(input) {
  const [rawCategory, rawName, rawUrl] = input.split('|');
  const category = _.capitalize(rawCategory);
  const name = rawName.split('_').map(_.capitalize).join(' ');
  const url = `${rawUrl}${AFFILIATE_CODE}`;
  return { category, name, url };
}
