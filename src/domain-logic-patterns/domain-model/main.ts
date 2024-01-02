import { Transaction } from "./domain/models/transaction";

const transaction = Transaction.create(
    100
)

transaction.approve()
