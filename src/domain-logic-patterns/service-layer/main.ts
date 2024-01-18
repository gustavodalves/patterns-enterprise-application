
import SendMailFake from "./gateway/send-mail";
import { User } from "./models/user";
import UserService from "./services/user";

const user: User = {
    name: 'Gustavo Alves',
    status: false,
    email: 'gustavo@gmail.com'
}

const userService = new UserService(new SendMailFake())
userService.changeState(user)