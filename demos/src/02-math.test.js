const { sum, multiply, divide } = require("./02-math");

test("adds 1 + 3 should be 4", () => {
  const rta = sum(1, 3);
  expect(rta).toBe(4);
});

test("multiply 1*3 should be 3", () => {
  const rta = multiply(1, 3);
  expect(rta).toBe(3);
});

test("divide 4/2 should be 2", () => {
  const rta = divide(4, 2);
  expect(rta).toBe(2);

  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();

  const rta3 = divide(5);
  expect(rta3).toBeNull();
});
