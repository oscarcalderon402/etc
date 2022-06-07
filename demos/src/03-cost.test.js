const total = require('./03-cost');

const obj = [
  { name: 'cerveza', cost: 1000 },
  { name: 'galletas', cost: 50 },
  { name: 'vive100', cost: '150' },
];

test('should be 1200', () => {
  const rta = total(obj);
  expect(rta).toBe(1200);
});
