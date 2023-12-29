import { Person } from "./person";
import PersonDataGateway from "./person-data-gateway";

const person: Person = new Person(
    "GUSTAVO",
    "ALVES",
)

const personDataGateway = new PersonDataGateway()

personDataGateway.insert(person)
