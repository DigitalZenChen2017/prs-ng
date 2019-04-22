export class PurchaseRequestLineItem {
    id: number;
    PurchaseRequest: object; // declared but not assigned
    Product: object;
    quantity: number;

    constructor(id: number, PurchaseRequest: object, Product: object, quantity: number) {
        this.id = id;
        this.PurchaseRequest = PurchaseRequest;
        this.Product = Product;
        this.quantity = quantity;
    }

    about(): string {
// tslint:disable-next-line: max-line-length
        return `PurchaseRequestLineItem: id=${this.id}, PurchaseRequest=${this.PurchaseRequest}, Product=${this.Product}, quantity=${this.quantity}`;
    }
}
