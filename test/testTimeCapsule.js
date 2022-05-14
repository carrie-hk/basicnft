const { assert } = require("chai");

const TimeCapsule = artifacts.require("./TimeCapsule.sol");

require("chai")
    .use(require("chai-as-promised"))
    .should()

contract("TimeCapsule", (accounts) => {
    let contract;

    before(async () => {
        contract = await TimeCapsule.deployed();
    })

    describe("deployment", async () => {
        it("deploys successfully", async () => {
            const address = contract.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, "");
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        })

        it("has correct name", async () => {
            const name = await contract.name();
            assert.equal(name, "TimeCapsule");
        })

        it("has a symbol", async () => {
            const symbol = await contract.symbol();
            assert.equal(symbol, "TC");
        })
    })

    describe("minting", async () => {
        it("creates a new token", async () => {
            const result = await contract.writeTo(1, "abc.com");
            // console.log(result);
            const event = result.logs[0].args;
            // console.log(event);
            assert.equal(event.tokenId.toNumber(), 1, "id is correct");
            assert.equal(event.from, "0x0000000000000000000000000000000000000000", "from is correct");
            assert.equal(event.to, "0xB291A6bb9c4ef145bC89eE27f7f8B5d4cDc95063", "to is correct");

        })
    })

    describe("update metadata", async () => {
        it("updates metadata", async () => {
            const result = await contract.updateMetadata(1, "bca.com");
            var uri = contract.tokenURI(1)
            Promise.resolve(uri).should.eventually.equal("bca.com");
        })
    })

    describe("transfer", async () => {
        it("creates a new token", async () => {
            const result = await contract.transfer(1, "0x0000000000000000000000000000000000000001");
            const event = result.logs[1].args;
            assert.equal(event.to, "0x0000000000000000000000000000000000000001", "corrently transferred");

        })
    })
})