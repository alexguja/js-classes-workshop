// This is a factory function that returns a new range object.
export function range(from, to) {
  // 🚀 Task:
  // Use Object.create() to create an object that inherits from
  // the prototype object defined below. Assign this to r.
  // The prototype object is stored as a property of this factory function,
  // and defines the shared methods for all range objects.

  let r;

  // 👇 These are noninherited properties that are unique to this object.
  // They store the start and end points (state) of this new range object.
  r.from = from;
  r.to = to;

  return r;
}

// 👇 This prototype object defines methods inherited by all range objects.
range.methods = {
  // Return true if x is in the range, false otherwise
  // This method works for textual and Date ranges as well as numeric.
  includes(x) {
    // 🚀 Task: Implement the includes method
    return;
  },

  // A generator function that makes instances of the class iterable.
  // Note that it only works for numeric ranges.
  *[Symbol.iterator]() {
    let x;
    // 🚀 Task: Implement the iterator method

    // 💡 Hint: Use a for loop to iterate over the range from this.from to this.to
    // for (let j = Math.ceil(this.from); j <= this.to; j++) ...

    yield x;
  },

  // Return a string representation of the range. This one is implemented for you.
  toString() {
    return "(" + this.from + "..." + this.to + ")";
  },
};
