import { SendMail } from "../gateway/send-mail";
import { User } from "../models/user";

export default class UserService {
    constructor(
        private readonly sendMail: SendMail
    ) {}

    async changeState(
        user: User
    ) {
        user.status = true

        this.sendMail.send(user.email)
    }
}
