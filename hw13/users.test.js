// task 2
const { describe } = require('mocha');
const userList = require('./users.js');

describe('Userlist verification', () => {
    test('Test users', () => {
        expect(userList).toContain("admin");
        expect(userList[0]).toStrictEqual("Nick");
        expect(userList[userList.length -1]).toStrictEqual("new_user_2");
        expect(userList).toHaveLength(5);
        expect(typeof userList[2]).toBe("string");
        expect(userList[7]).toBeUndefined();
    });
});
