import { Person } from "./person";

export default class PersonDataGateway {
    private readonly data: Person[] = []

    insert(
        person: Person
    ) {
        this.data.push(person)
    }
}
