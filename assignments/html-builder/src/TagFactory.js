import PairTag from './PairTag.js';
import SingleTag from './SingleTag.js';

export default class TagFactory {
  // eslint-disable-next-line class-methods-use-this
  create(name, attributes = {}, content = '', children = []) {
    const lowerName = name.toLowerCase();

    if (SingleTag.isSingleTag(lowerName)) {
      return new SingleTag(name, attributes);
    }

    return new PairTag(name, attributes, content, children);
  }
}
