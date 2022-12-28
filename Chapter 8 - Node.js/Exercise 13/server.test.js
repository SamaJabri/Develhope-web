const supertest = require("supertest");
const app = require("./app");

const request = supertest(app);

test("GET", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toEqual({ name: "Sama Jabri", age: 22 });
});
