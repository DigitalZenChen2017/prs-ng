export class PurchaseRequest {
    id: number;
    User: object;
    description: string;
    justification: string;
    dateNeeded: object;
    deliveryMode: string;
    status: string;
    submittedDate: object;
    reasonForRejection: string;

// tslint:disable-next-line: max-line-length
    constructor(id: number, User: object, description: string, justification: string, dateNeeded: object, deliveryMode: string, status: string, submittedDate: object, reasonForRejection: string) {
        this.id = id;
        this.User = User;
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
        return `PurchaseRequest: id=${this.id}, User=${this.User}, description=${this.description}, justification=${this.justification}, dateNeeded=${this.dateNeeded}, deliveryMode=${this.deliveryMode}, status=${this.status}, submittedDate=${this.submittedDate}, reasonForRejection=${this.reasonForRejection}`;
    }
}
