const mockGetAll = jest.fn();
const request = require("supertest");
const createApp = require("../src/app");

const { generateManyBooks } = require("../src/fakes/book.fake");

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

describe("Test for hello endpoint", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3002);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for [GET] /api/v1/books", () => {
    test("should return list books", async () => {
      const fakeBooks = generateManyBooks(4);

      mockGetAll.mockResolvedValue(fakeBooks);
      return await request(app)
        .get("/api/v1/books")
        .expect(200)
        .then(async ({ body }) => {
          console.log(body);
          await expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
