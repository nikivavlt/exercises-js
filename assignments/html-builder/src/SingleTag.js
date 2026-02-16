import Tag from './Tag.js';

export default function SingleTag(name, attributes) {
  Tag.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Tag.prototype);

SingleTag.tags = new Set([
  'img', 'br', 'hr', 'input', 'meta', 'link',
  'area', 'base', 'col', 'embed', 'source', 'track', 'wbr',
]);

SingleTag.isSingleTag = function (name) {
  return this.tags.has(name.toLowerCase());
};

SingleTag.prototype.toString = function () {
  return `<${this.name}${this.getAttributesAsString()} />`;
};

// class SingleTag extends Tag {
//     static tags = new Set([
//         'img', 'br', 'hr', 'input', 'meta', 'link',
//         'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'
//     ]);

//     static isSingleTag(name) {
//         return this.tags.has(name.toLowerCase());
//     }
// }
