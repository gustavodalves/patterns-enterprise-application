import Specification from "./specification"

class T extends Specification<boolean> {
    isSatisfiedBy(item: boolean): boolean {
        return item
    }
}

class O extends T {}

describe("and specification", () => {
    it("shoud be able specification satisfied", () => {

        const t = new T()
        const o = new O()
        const isValid = t.and(o).isSatisfiedBy(true)

        expect(isValid).toBeTruthy()
    })

    it("shoud not be able specification satisfied", () => {

        const t = new T()
        const o = new O()
        const isValid = t.and(o).isSatisfiedBy(false)

        expect(isValid).toBeFalsy()
    })
})