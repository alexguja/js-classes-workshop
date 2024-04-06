import { Histogram } from "./delegation";

describe("🧪 Histogram", () => {
  let histogram;

  beforeEach(() => {
    histogram = new Histogram();
  });

  it("should count keys correctly", () => {
    histogram.add("key1");
    histogram.add("key1");
    histogram.add("key2");
    expect(histogram.count("key1")).toBe(2);
    expect(histogram.count("key2")).toBe(1);
    expect(histogram.count("key3")).toBe(0);
  });

  it("should check existence of keys correctly", () => {
    histogram.add("key1");
    expect(histogram.has("key1")).toBe(true);
    expect(histogram.has("key2")).toBe(false);
  });

  it("should return correct size", () => {
    histogram.add("key1");
    histogram.add("key2");
    expect(histogram.size).toBe(2);
  });

  it("should add keys correctly", () => {
    histogram.add("key1");
    histogram.add("key1");
    expect(histogram.count("key1")).toBe(2);
  });

  it("should delete keys correctly", () => {
    histogram.add("key1");
    histogram.add("key1");
    histogram.delete("key1");
    expect(histogram.count("key1")).toBe(1);
    histogram.delete("key1");
    expect(histogram.count("key1")).toBe(0);
  });

  it("should return correct keys", () => {
    histogram.add("key1");
    histogram.add("key2");
    expect(Array.from(histogram.keys())).toEqual(["key1", "key2"]);
  });

  it("should return correct values", () => {
    histogram.add("key1");
    histogram.add("key1");
    histogram.add("key2");
    expect(Array.from(histogram.values())).toEqual([2, 1]);
  });

  it("should return correct entries", () => {
    histogram.add("key1");
    histogram.add("key1");
    histogram.add("key2");
    expect(Array.from(histogram.entries())).toEqual([
      ["key1", 2],
      ["key2", 1],
    ]);
  });
});
