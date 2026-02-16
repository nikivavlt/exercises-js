import Tag from './Tag.js';

export default function PairTag(name, attributes, value = '', children = []) {
  Tag.apply(this, [name, attributes]);

  this.value = value;
  this.children = children;
}

// function New(Constructor, arg) {
//     const obj = {};
//     Constructor.apply(obj, arg);
//     return obj;
// }
// new PairTag('div', { class: 'text' }, 'interesting text');
// New(PairTag, ['div', { class: 'text' }, 'interesting text']);

// Object.setPrototypeOf(PairTag, Tag);
PairTag.prototype = Object.create(Tag.prototype);
// PairTag.prototype.constructor = PairTag;

PairTag.prototype.toString = function () {
  const value = this.children.length > 0
    ? this.children.join('')
    : this.value;
    // use both
  return `<${this.name}${this.getAttributesAsString()}>${value}</${this.name}>`;
};

// export default class PairTag extends Tag {
//     constructor(name, attributes, value = '', children = []){
//         super(name, attributes);

//         this.value = value;
//         this.children = children;
//     }

//     toString() {
//         const value = this.children.length > 0 ? this.children.join("") : this.value;

//         return `<${this.name}${this.getAttributesAsString()}>${value}</${this.name}>`;
//     }
// }
