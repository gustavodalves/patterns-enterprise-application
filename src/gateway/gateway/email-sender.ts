export interface EmailSenderGateway {
    send(email: string): Promise<void>
}
