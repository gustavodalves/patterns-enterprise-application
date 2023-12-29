import { Database } from "./database"
import { Person } from "./person"

const person: Person = new Person(
    "GUSTAVO",
    "ALVES",
)

person.save()
