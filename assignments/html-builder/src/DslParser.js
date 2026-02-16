export default class DslParser {
  constructor(tagFactory) {
    this.tagFactory = tagFactory;
  }

  parse(dsl) {
    if (!Array.isArray(dsl) || dsl.length === 0) {
      throw new Error('DSL must be a non-empty array');
    }

    const [name, ...rest] = dsl;

    if (typeof name !== 'string') {
      throw new Error('First element must be a tag name (string)');
    }

    const parsed = this.parseElements(rest);

    return this.tagFactory.create(
      name,
      parsed.attributes,
      parsed.content,
      parsed.children,
    );
  }

  parseElements(elements) {
    const result = {
      attributes: {},
      content: '',
      children: [],
    };

    elements.forEach((el) => {
      if (Array.isArray(el)) {
        result.children.push(...el.map((e) => this.parse(e)));
      } else if (el instanceof Object) {
        result.attributes = el;
      } else if (typeof el === 'string' || typeof el === 'number') {
        result.content = el;
      } else {
        throw new Error(`Invalid DSL element: ${el}`);
      }
    });

    return result;
  }
}
