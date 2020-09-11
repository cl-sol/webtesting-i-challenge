const enhancer = require('./enhancer.js');
// test away!
const weapon1 = {
    name: "apple",
    durability: 5,
    enhancement: 2
}
const weapon2 = {
    name: "fork",
    durability: 17,
    enhancement: 30
}
const weapon3 = {
    name: "blowdryer",
    durability: 37,
    enhancement: 43
}
const weapon4 = {
    name: "cactus",
    durability: 15,
    enhancement: 10
}
const weapon5 = {
    name: "shield",
    durability: 78,
    enhancement: 50
}

describe("repair", () => {
    it ("should restore durability to 100", () => {
        const expectedDurability = 100
        const actualDurability = enhancer.repair(weapon1)
        expect(actualDurability.durability).toBe(expectedDurability);
    });
});