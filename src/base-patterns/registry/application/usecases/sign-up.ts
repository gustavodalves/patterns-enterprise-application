import { inject } from "../../di/registry"
import { User } from "../../domain/model/user"
import { IUserRepository } from "../../repository/IUserRepository"

export class SignUpUseCase {
    @inject('userRepository')
    private readonly repository?: IUserRepository

    async execute(name: string) {
        const user: User = {
            name
        }

        await this.repository?.add(user)
    }
}