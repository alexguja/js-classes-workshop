import { Range } from "./classes-and-constructors";

describe("🧪 Range class", () => {
  it("should create a range object with from and to properties", () => {
    const r = new Range(1, 3); // Create a range object
    expect(r.from).toBe(1); //
    expect(r.to).toBe(5);
  });

  it("should iterate over the range", () => {
    const r = new Range(1, 3);
    expect([...r]).toEqual([1, 2, 3]); //  Convert to an array via iterator
  });

  it("should verify if a number is included in the range", () => {
    const r = new Range(1, 3);
    expect(r.includes(2)).toBe(true);
    expect(r.includes(4)).toBe(false);
  });
});
