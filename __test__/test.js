const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
    it("responds with Hi!", (done) => {
        request(app).get("/").expect("Hi!", done);
    })
});