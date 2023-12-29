import { TicketDAO } from "../DAOs/ticket-dao";
import crypto from "crypto"
import { CreateTicketInputDTO } from "../DTOs/Services/ticket-service.dto";
import { TicketCreateDAOInputDTO } from "../DTOs/DAOs/ticket-dao.dto";

export default class TicketService {
    constructor(
        private readonly dao: TicketDAO
    ) {}

    private generateUUID() {
        return crypto.randomUUID()
    }

    async createTicket(
        input: CreateTicketInputDTO
    ) {
        const ticketId = this.generateUUID()
        const ticket: TicketCreateDAOInputDTO = {
            id: ticketId,
            ownerName: input.ownerName,
            status: "open"
        }
        await this.dao.create(ticket)
        return ticketId
    }
}
