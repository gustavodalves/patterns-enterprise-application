import { SignUpUseCase } from "./application/usecases/sign-up";
import { Registry } from "./di/registry";
import { UserRepositoryInMemory } from "./repository/UserRepositoryInMemory";

export async function main() {
    const registry = Registry.getInstance()

    const repoInMemory = new UserRepositoryInMemory()

    registry.provide(
        'userRepository',
        repoInMemory
    )

    const useCase = new SignUpUseCase()
    await useCase.execute('GUT')
}

main()
