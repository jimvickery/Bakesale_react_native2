const ajax = require("./ajax")
// @ponicode
describe("ajax.default.fetchInitialDeals", () => {
    test("0", async () => {
        await ajax.default.fetchInitialDeals()
    })
})

// @ponicode
describe("ajax.default.fetchlDealDetail", () => {
    test("0", async () => {
        await ajax.default.fetchlDealDetail("bc23a9d531064583ace8f67dad60f6bb")
    })

    test("1", async () => {
        await ajax.default.fetchlDealDetail(9876)
    })

    test("2", async () => {
        await ajax.default.fetchlDealDetail(12345)
    })

    test("3", async () => {
        await ajax.default.fetchlDealDetail("da7588892")
    })

    test("4", async () => {
        await ajax.default.fetchlDealDetail("c466a48309794261b64a4f02cfcc3d64")
    })

    test("5", async () => {
        await ajax.default.fetchlDealDetail(undefined)
    })
})

// @ponicode
describe("ajax.default.fetchDealsSearchResults", () => {
    test("0", async () => {
        await ajax.default.fetchDealsSearchResults("UNLOCK TABLES;")
    })

    test("1", async () => {
        await ajax.default.fetchDealsSearchResults(10)
    })

    test("2", async () => {
        await ajax.default.fetchDealsSearchResults("DELETE FROM Projects WHERE pid = %s")
    })

    test("3", async () => {
        await ajax.default.fetchDealsSearchResults(0.0)
    })

    test("4", async () => {
        await ajax.default.fetchDealsSearchResults("UPDATE Projects SET pname = %s WHERE pid = %s")
    })

    test("5", async () => {
        await ajax.default.fetchDealsSearchResults(NaN)
    })
})
