export default class HtmlBuilder {
  constructor(dslParser) {
    this.parser = dslParser;
  }

  build(dsl) {
    return this.parser.parse(dsl);
  }
}
