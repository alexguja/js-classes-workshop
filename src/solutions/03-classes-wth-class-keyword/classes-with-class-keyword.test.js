import { Range } from "./classes-with-class-keyword";

describe("🧪 Range class", () => {
  it("should create an instance of the Range class with from and to properties", () => {
    const r = new Range(1, 3); // Create an instance of the Range class
    expect(r.from).toBe(1);
    expect(r.to).toBe(3);
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

  it("should convert the range object to a string", () => {
    const r = new Range(1, 3);
    expect(r.toString()).toBe("(1...3)");
  });
});
