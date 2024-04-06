import { Complex } from "./complex-numbers-class";

describe("🧪 Complex class", () => {
  it("should create an instance of the Complex class with real and imaginary properties", () => {
    const c = new Complex(2, 3);
    expect(c.real).toBe(2);
    expect(c.imaginary).toBe(3);
  });

  it("should add two complex numbers", () => {
    const c = new Complex(1, 2);
    const d = new Complex(2, 3);
    expect(Complex.sum(c, d).toString()).toBe("{3,5}");
  });

  it("should multiply two complex numbers", () => {
    const c = new Complex(1, 2);
    const d = new Complex(2, 3);
    expect(Complex.product(c, d).toString()).toBe("{-4,7}");
  });

  it("should calculate the magnitude of a complex number", () => {
    const c = new Complex(3, 4);
    expect(c.magnitude).toBe(5);
  });

  it("should convert the complex number object to a string", () => {
    const c = new Complex(1, 2);
    expect(c.toString()).toBe("{1,2}");
  });

  it("should verify if two complex numbers are equal", () => {
    const c = new Complex(1, 2);
    const d = new Complex(1, 2);
    expect(c.equals(d)).toBe(true);
  });
});
