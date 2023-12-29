import TicketService from "./application/services/ticket.service"
import TicketDAOInMemory from "./infra/ticket-dao.in-memory"

async function main() {
    const ticketDAO = new TicketDAOInMemory()
    const ticketService = new TicketService(
        ticketDAO
    )
    
    const ownerName = "GUSTAVO"
    await ticketService.createTicket({
        ownerName
    })
}

main()
