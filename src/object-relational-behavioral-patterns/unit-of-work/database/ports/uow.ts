import { Query } from "./query"

export interface UnitOfWork {
    runTransactions(): Promise<void>
    add(query: Query): Promise<void>
}
