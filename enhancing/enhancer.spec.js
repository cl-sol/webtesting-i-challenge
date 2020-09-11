const enhancer = require('./enhancer.js');
// test away!
const item1 = {
    name: "apple",
    durability: 5,
    enhancement: 2
}
const item2 = {
    name: "fork",
    durability: 17,
    enhancement: 9
}
const item3 = {
    name: "blowdryer",
    durability: 37,
    enhancement: 20
}
const item4 = {
    name: "cactus",
    durability: 15,
    enhancement: 10
}
const item5 = {
    name: "shield",
    durability: 78,
    enhancement: 5
}

describe("repair", () => {
    it ("restores durability to 100", () => {
        const expectedDurability = 100;
        const actualDurability = enhancer.repair(item1);

        expect(actualDurability.durability).toBe(expectedDurability);
    });
});

describe("success", () => {
    it("returns item with +1 enhancement", () => {
        const expectedEnhancement = 10;
        const actualEnhancement = enhancer.success(item2);

        expect(actualEnhancement)
            .toEqual(
                {
                name: "fork",
                durability: 17,
                enhancement: 10
                }
            );
        // expect(actualEnhancement.enhancement).toBe(expectedEnhancement)
    })

    it("returns item with unchanged enhancement of 20", () => {
        const expectedEnhancement = 20;
        const actualEnhancement = enhancer.success(item3);

        expect(actualEnhancement)
            .toEqual(
                {
                name: "blowdryer",
                durability: 37,
                enhancement: 20
                }
            );
    })
})

// describe("fail", () => {
//     it("returns item with -5 durability", () => {
//         const expectedDurability = 5;
//         const actualDurability = enhancer.fail(item4);

//         expect(actualDurability).toBe(expectedDurability);
//     })

//     it("returns item with -10 durability", () => {

//     })

//     it("returns item with -1 durability", () => {

//     })
// })

// describe("get", () => {

// })