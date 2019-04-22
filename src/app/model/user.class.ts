export class User {
    id: number;
    userName: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;

    // tslint:disable-next-line: max-line-length
    constructor(id: number, userName: string, password: string, firstName: string, lastName: string, phoneNumber: string, email: string, isReviewer: boolean, isAdmin: boolean) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.isReviewer = isReviewer;
        this.isAdmin = isAdmin;
    }

    about(): string {
        // tslint:disable-next-line: max-line-length
        return `User: id=${this.id}, userName=${this.userName}, password=${this.password}, firstName=${this.firstName}, lastName=${this.lastName}, phoneNumber=${this.phoneNumber}, email=${this.email}, isReviewer=${this.isReviewer}, isAdmin=${this.isAdmin}`;
    }
}
