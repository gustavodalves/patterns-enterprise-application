import mysql2 from "mysql2"
import { Connection } from "../../ports/connection";
import { Query } from "../../ports/query";

export class MySQL2ConnectionAdapter implements Connection {
    constructor(
        public pool: mysql2.Pool
    ) {}

    async query<T>(query: Query): Promise<T> {
        return new Promise((resolve, reject) => {
            this.pool.query(
                query.statement,
                query.data,
                (err, result) => {
                    if(err) reject(err)
                    resolve(result as any)
                }
            )
        })
    }
}