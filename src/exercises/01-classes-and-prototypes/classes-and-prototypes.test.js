import { range } from "./classes-and-prototypes";

describe("🧪 range", () => {
  it("should create a range object with from and to properties", () => {
    const r = range(1, 5); // Create a range object
    expect(r.from).toBe(1); //
    expect(r.to).toBe(5);
  });

  it("should iterate over the range", () => {
    const r = range(1, 3);
    expect([...r]).toEqual([1, 2, 3]); //  Convert to an array via iterator
  });

  it("should verify if a number is included in the range", () => {
    const r = range(1, 3);
    expect(r.includes(2)).toBe(true);
    expect(r.includes(4)).toBe(false);
  });

  it("should convert the range object to a string", () => {
    const r = range(1, 3);
    expect(r.toString()).toBe("(1...3)");
  });
});
