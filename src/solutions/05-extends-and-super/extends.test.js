import { EasyArray, TypedMap } from "./extends";

describe("extends and super", () => {
  describe("🧪 EasyArray", () => {
    it("should create an instance of EasyArray and Array", () => {
      const a = new EasyArray();
      expect(a instanceof EasyArray).toBe(true);
      expect(a instanceof Array).toBe(true);
    });

    it("should use inherited methods", () => {
      const a = new EasyArray();
      a.push(1, 2, 3, 4);
      expect(a.length).toBe(4);
      expect(a.pop()).toBe(4);
      expect(a.length).toBe(3);
    });

    it("should get the first and last elements", () => {
      const a = new EasyArray();
      a.push(1, 2, 3);
      expect(a.first).toBe(1);
      expect(a.last).toBe(3);
    });

    it("should access elements using array syntax", () => {
      const a = new EasyArray();
      a.push(1, 2, 3);
      expect(a[1]).toBe(2);
    });

    it("should be recognized as an array by Array.isArray", () => {
      const a = new EasyArray();
      expect(Array.isArray(a)).toBe(true);
    });

    it("should be recognized as an array by EasyArray.isArray", () => {
      const a = new EasyArray();
      expect(EasyArray.isArray(a)).toBe(true);
    });
  });

  describe("🧪 TypedMap", () => {
    it("should throw an error when wrong key type is provided in constructor", () => {
      expect(
        () => new TypedMap("number", "string", [["key", "value"]])
      ).toThrow(TypeError);
    });

    it("should throw an error when wrong value type is provided in constructor", () => {
      expect(
        () => new TypedMap("string", "number", [["key", "value"]])
      ).toThrow(TypeError);
    });

    it("should not throw an error when correct types are provided in constructor", () => {
      expect(
        () => new TypedMap("string", "string", [["key", "value"]])
      ).not.toThrow();
    });

    it("should throw an error when wrong key type is set", () => {
      const map = new TypedMap("number", "string");
      expect(() => map.set("key", "value")).toThrow(TypeError);
    });

    it("should throw an error when wrong value type is set", () => {
      const map = new TypedMap("string", "number");
      expect(() => map.set("key", "value")).toThrow(TypeError);
    });

    it("should not throw an error when correct types are set", () => {
      const map = new TypedMap("string", "string");
      expect(() => map.set("key", "value")).not.toThrow();
    });
  });
});
