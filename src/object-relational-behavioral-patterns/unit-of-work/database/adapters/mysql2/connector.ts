import mysql2 from "mysql2"

type Options = {
    host: string,
    port: number,
    password: string,
    user: string,
    database: string
}

export class MySQL2Connector {
    private _pool: mysql2.Pool

    constructor(
        readonly options: Options
    ) {
        this._pool = this.connect(options)
    }

    connect({
        database, host, password, port, user
    }: Options) {
        return mysql2.createPool({
            database, host, password, port, user
        })
    }

    getPool() {
        return this._pool
    }
}