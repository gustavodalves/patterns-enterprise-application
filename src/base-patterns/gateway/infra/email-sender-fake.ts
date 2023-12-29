import { EmailSenderGateway } from "../gateway/email-sender";

export class EmailSenderFakeGateway implements EmailSenderGateway {
    async send(email: string): Promise<void> {
        console.log(email)
    }
}
