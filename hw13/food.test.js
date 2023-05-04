// task 4
const food = require('./food.js');

describe('Food verification', () => {
    const min = 12;
    const max = 40;
    const sortedArray = food.filterFoodPrice(food, min, max);
    test('Test food', () => {
        expect(sortedArray).toHaveLength(3);
        expect(sortedArray).toContainEqual({ kind: 'pepper', price: 27 });
        expect(sortedArray).toEqual(food[1]);
        expect(sortedArray).toEqual(food[2]);
        expect(sortedArray).toEqual(food[3]);
        expect(sortedArray[0].price).toBeGreaterThan(min);
        expect(sortedArray[2].price).toBeLessThan(max);
        expect(sortedArray).not.toContainEqual({ kind: 'lemon', price: 50 });
    });
});