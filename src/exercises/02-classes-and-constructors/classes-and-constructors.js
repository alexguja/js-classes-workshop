// 🚀 Task: Complete the implementation of the Range constructor function below.
// The Range constructor should accept two arguments, to and from.
// Assing them to an instance of the Range object using the this keyword.
export function Range(from, to) {}

// 👇 All Range objects inherit from this object.
// Note that the property name must be "prototype" for this to work.
Range.prototype = {
  constructor: Range, // 👈 The class constructor

  includes(x) {
    return this.from <= x && x <= this.to;
  },

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  },

  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};
