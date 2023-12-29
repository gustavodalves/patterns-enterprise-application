import { EmailSenderFakeGateway } from "./infra/email-sender-fake";
import { ValidateEmailUseCase } from "./use-cases/validate-email";

async function main() {
    const emailValidation = new ValidateEmailUseCase(
        new EmailSenderFakeGateway()
    )

    await emailValidation.execute(
        'vitor.crispimrr@gmail.com'
    )
}

main()
