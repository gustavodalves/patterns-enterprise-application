export class Database {
    private static instance: Database | null = null

    public readonly data: Record<string, any[]> = {}

    static getInstance() {
        if(!this.instance) {
            this.instance = new Database()
        }

        return this.instance
    }

    insert(tableName: string, data: any) {
        this.data[tableName] = this.data[tableName] || []
        this.data[tableName].push(data)
    }
}
