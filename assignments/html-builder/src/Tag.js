export default function Tag(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
}

Tag.prototype.getAttributesAsString = function () {
  const attributes = Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`).join(' ');

  return attributes ? ` ${attributes}` : '';
};

// export default class Tag {
//     constructor(name, attributes = {}) {
//         this.name = name;
//         this.attributes = attributes;
//     }

//     getAttributesAsString() {
//         return Object.entries(this.attributes).map(([key, value]) => {
//             return ` ${key}="${value}"`;
//         }).join(" ");
//     }
// }
