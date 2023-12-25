import { Query } from "../../ports/query";
import { UnitOfWork } from "../../ports/uow";
import mysql2 from "mysql2"

export default class MySQL2Uow implements UnitOfWork {
    private queries: Query[] = []
    private connection: mysql2.PoolConnection | null = null

    constructor(
        public pool: mysql2.Pool
    ) {}

    private async beginTransaction(): Promise<void> {
        const getConnection = async (): Promise<mysql2.PoolConnection> => {
            return await new Promise((resolve, reject) => {
                this.pool.getConnection((err, conn) => {
                    resolve(conn as mysql2.PoolConnection)
                })
            })
        }
        this.connection = await getConnection()
        this.connection.beginTransaction(err => {})
    }

    private async commit(): Promise<void> {
        this.connection?.commit()
    }

    private async rollback(): Promise<void> {
        this.connection?.rollback((err => {
            if(err) {
                console.log(err)
            }
        }))
    }

    public async add(query: Query): Promise<void> {
        this.queries.push(query)
    }

    public async runTransactions(): Promise<void> {
        await this.beginTransaction()

        try {
            for (const query of this.queries) {
                await this.connection?.promise().query(
                    query.statement, query.data
                )
            }

            await this.commit()
        } catch {
            await this.rollback()
        }

        this.queries = []

        this.connection?.promise().destroy()
        this.connection = null
    }
}