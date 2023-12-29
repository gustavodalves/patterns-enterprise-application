import { User } from "../domain/model/user";

export interface IUserRepository {
    add(user: User): Promise<void> 
}