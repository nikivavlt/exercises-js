import DslParser from './DslParser.js';
import TagFactory from './TagFactory.js';

const parse = (dsl) => {
  const tagFactory = new TagFactory();
  const dslParser = new DslParser(tagFactory);
  const parsed = dslParser.parse(dsl);

  return parsed;
};

export default parse;
