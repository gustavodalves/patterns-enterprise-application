import { EmailSenderGateway } from "../gateway/email-sender";

export class ValidateEmailUseCase {
    constructor(
        private emailSenderGateway: EmailSenderGateway
    ) {}

    async execute(
        email: string
    ) {
        await this.emailSenderGateway.send(email)
    }
}