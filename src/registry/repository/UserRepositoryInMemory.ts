import { User } from "../domain/model/user";
import { IUserRepository } from "./IUserRepository";

export class UserRepositoryInMemory implements IUserRepository {
    private readonly data: User[] = []

    async add(user: User): Promise<void> {
        this.data.push(user)
    }
}
