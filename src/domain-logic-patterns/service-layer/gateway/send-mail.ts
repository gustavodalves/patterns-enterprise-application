export interface SendMail {
    send(email: string): Promise<void>
}

export default class SendMailFake implements SendMail {
    async send(email: string): Promise<void> {
        console.log(email)
    }
}