//matchers

test("test obj", () => {
  const data = { name: "oscar" };
  data.lastName = "calderon";
  expect(data).toEqual({ name: "oscar", lastName: "calderon" });
});

test("null", () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test("boleans", () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
});

test("string", () => {
  expect("oscar calderon").toMatch(/calde/);
});

test("array", () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
