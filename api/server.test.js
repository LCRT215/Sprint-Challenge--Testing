const server = require("./server.js");
const supertest = require("supertest");
const db = require("../data/dbConfig");

describe("server", () => {
  beforeEach(async () => {
    await db("games").truncate();
  });

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

  describe('GET "/games"', () => {
    it("should render list + 200 OK", () => {
      return supertest(server)
        .get("/games")
        .expect(200);
    });
    it("should render list in json format", () => {
      return supertest(server)
        .get("/games")
        .expect("Content-Type", /json/i);
    });
  });

  describe('POST "/games"', () => {
    it("should respond with 201 when new game is added", async () => {
      const game = {
        title: "UNO",
        genre: "Card"
      };
      const res = await supertest(server)
        .post("/games")
        .send(game)
        .expect(201);
    });
    it("should return a 400 error when required info is missing", async () => {
      const res = await supertest(server)
        .post("/games")
        .send({ title: "Grand Theft Auto" });
      expect(res.status).toBe(422);
    });
  });
});
