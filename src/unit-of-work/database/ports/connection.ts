import { Query } from "./query";

export interface Connection {
    query<T>(
        query: Query
    ): Promise<T | undefined>
}
