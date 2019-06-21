const db = require("../data/dbConfig.js");

describe("games model", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

  it('should set environment to "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("get()", () => {});
  describe("add()", () => {});
});
