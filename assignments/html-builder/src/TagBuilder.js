export default class TagBuilder {
  constructor(name, htmlBuilder) {
    this.tagName = name;
    this.attrs = {};
    this.value = '';
    this.childTags = [];

    this.htmlBuilder = htmlBuilder;
  }

  attr(key, value) {
    this.attrs[key] = value;
    return this;
  }

  attrs(attributes) {
    Object.assign(this.attrs, attributes);
    return this;
  }

  text(content) {
    this.value = content;
    return this;
  }

  child(dsl) {
    this.childTags.push(dsl);
    return this;
  }

  children(...dsls) {
    this.childTags.push(...dsls);
    return this;
  }

  build() {
    const dsl = [this.tagName];

    if (Object.keys(this.attrs).length) {
      dsl.push(this.attrs);
    }

    if (this.value) {
      dsl.push(this.value);
    }

    dsl.push(...this.childTags);

    return this.htmlBuilder.build(dsl);
  }
}
