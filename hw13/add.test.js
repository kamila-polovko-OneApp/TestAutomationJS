// task 1
const add = require('./add');

describe("Addition tests", () => {
    test('adding 0.1 to 0.2 will be 0.3', () => {
        expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
});