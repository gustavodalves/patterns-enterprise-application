import { MySQL2Connector } from "./database/adapters/mysql2/connector"
import MySQL2Uow from "./database/adapters/mysql2/uow"

async function main() {
    const connection = new  MySQL2Connector({
        host: 'localhost',
        port: 3307,
        password: 'admin',
        user: 'root',
        database: 'test'
    })

    const uow = new MySQL2Uow(connection.getPool())

    const users = Array.from({
        length: 4000,
    }).map((_, index) => `user: ${index}`)

    for (const user of users) {
        await uow.add({
            data: [user],
            statement: "insert into users (name) values (?)"
        })
    }

    await uow.runTransactions()
}

main()
