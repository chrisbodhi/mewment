import _ from 'lodash';
import { AFFILIATE_CODE } from '../config/CONSTANTS';

export function urlFormatter(input) {
  const [rawName, rawUrl] = input.split('|');
  const name = rawName.split('_').map(_.capitalize).join(' ');
  const url = `${rawUrl}${AFFILIATE_CODE}`;
  return { name, url };
}
