export enum TransactionStatusEnum {
    Approved = 'approved',
    Refused = 'refused',
    Rejected = 'rejected',
    Pending = 'pending'
}

export class Transaction {
    constructor(
        private readonly value: number,
        public  status: TransactionStatusEnum
    ) {}

    static create(
        value: number
    ) {
        return new Transaction(
            value, TransactionStatusEnum.Pending
        )
    }

    private validateChangeStatus() {
        if(this.status !== TransactionStatusEnum.Pending) {
            throw new Error("transaction status pending is required to do this action")
        }
    }

    approve() {
        this.validateChangeStatus()
        this.status = TransactionStatusEnum.Approved
    }

    refuse() {
        this.validateChangeStatus()
        this.status = TransactionStatusEnum.Refused
    }

    reject() {
        this.validateChangeStatus()
        this.status = TransactionStatusEnum.Rejected
    }
}
