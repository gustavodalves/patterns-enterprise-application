import { TicketCreateDAOInputDTO } from "../DTOs/DAOs/ticket-dao.dto"

export interface TicketDAO {
    create(ticket: TicketCreateDAOInputDTO): Promise<void>
}
