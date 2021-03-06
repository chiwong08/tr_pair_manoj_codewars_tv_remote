const { tvRemote } = require("../src/tvRemote");

describe("Sample Tests", () => {

    test("example", () => {
      expect(tvRemote("codewars")).toBe(36);
    });
    
    test("misc", () => {
      expect(tvRemote("does")).toBe(16);
      expect(tvRemote("your")).toBe(23);
      expect(tvRemote("solution")).toBe(33);
      expect(tvRemote("work")).toBe(20);
      expect(tvRemote("for")).toBe(12);
      expect(tvRemote("these")).toBe(27);
      expect(tvRemote("words")).toBe(25);
    });
    
  });
  