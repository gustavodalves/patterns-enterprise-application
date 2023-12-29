import { TicketDAO } from "../application/DAOs/ticket-dao";
import { TicketCreateDAOInputDTO } from "../application/DTOs/DAOs/ticket-dao.dto";

export default class TicketDAOInMemory implements TicketDAO {
    private readonly data: TicketCreateDAOInputDTO[] = []
 
    async create(ticket: TicketCreateDAOInputDTO): Promise<void> {
        this.data.push(ticket)        
    }
}