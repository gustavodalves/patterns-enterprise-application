import { Database } from "./database"

export class Person {
    private readonly database = Database.getInstance()

    constructor(
        private readonly lastName: string,
        private readonly firstName: string,
    ) {}

    save() {
        this.database.insert(
            "persons",
            this
        )
    }
}
