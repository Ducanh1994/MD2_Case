import {User} from "./User";

export class UserManage {
    private id: number;
    private numberOfUsers: number;
    private users: User[];

    constructor(id: number) {
        this.id = id;
        this.numberOfUsers = 0;
        this.users = [];
    }
    addUser(user: User): void {
        this.users.push(user);
    }
    getUser(): User[] {
        return this.users
    }
    getId(): number {
        return this.id;
    }
}