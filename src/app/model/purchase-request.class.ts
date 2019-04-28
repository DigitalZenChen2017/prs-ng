import { User } from './user.class';

export class PurchaseRequest {
    id: number;
    user: User;
    description: string;
    justification: string;
    dateNeeded: Date;
    deliveryMode: string;
    status: string;
    submittedDate: Date;
    reasonForRejection: string;

// tslint:disable-next-line: max-line-length
    constructor(id: number, prUser: User, description: string, justification: string, dateNeeded: Date, deliveryMode: string, status: string, submittedDate: Date, reasonForRejection: string) {
        this.id = id;
        this.user = prUser;
        this.description = description;
        this.justification = justification;
        this.dateNeeded = dateNeeded;
        this.deliveryMode = deliveryMode;
        this.status = status;
        this.submittedDate = submittedDate;
        this.reasonForRejection = reasonForRejection;
    }

    about(): string {
// tslint:disable-next-line: max-line-length
        return `PurchaseRequest: id=${this.id}, User=${this.user}, description=${this.description}, justification=${this.justification}, dateNeeded=${this.dateNeeded}, deliveryMode=${this.deliveryMode}, status=${this.status}, submittedDate=${this.submittedDate}, reasonForRejection=${this.reasonForRejection}`;
    }
}
