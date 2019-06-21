const server = require("./server.js");
const supertest = require("supertest");

describe("server", () => {
  describe('GET "/" sanity check', () => {
    it("should render with no errors and 200 ok", () => {
      return supertest(server)
        .get("/")
        .expect(200);
    });
    it("should respond with json format", () => {
      return supertest(server)
        .get("/")
        .expect("Content-Type", /json/i);
    });
    it("should respond with a message", async () => {
      await supertest(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ message: "hey, girl!" });
        });
    });
  });
});
