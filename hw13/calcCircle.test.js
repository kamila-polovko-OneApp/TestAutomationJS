// task 3
const calcCircle = require('./calcCircle.js');

describe('Circle verification', () => {
    test('test circle', () =>{
    expect(calcCircle.getCircleLength(22)).toBeCloseTo(138.2, 1);
    expect(calcCircle.getCircleArea(9)).toBeCloseTo(254.47, 2);
    expect(calcCircle.getCircleLength()).toBeDefined();
    expect(calcCircle.getCircleArea()).toBeDefined();
    });
});
