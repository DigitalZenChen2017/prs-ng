import { PurchaseRequest } from './purchase-request.class';
import { Product } from './product.class';

export class PurchaseRequestLineItem {
    id: number;
    purchaseRequest: PurchaseRequest; // declared but not assigned
    product: Product;
    quantity: number;
    

    constructor(id: number, PurchaseRequest: PurchaseRequest, Product: Product, quantity: number) {
        this.id = id;
        this.purchaseRequest = PurchaseRequest;
        this.product = Product;
        this.quantity = quantity;
    }

    about(): string {
// tslint:disable-next-line: max-line-length
        return `PurchaseRequestLineItem: id=${this.id}, PurchaseRequest=${this.purchaseRequest}, Product=${this.product}, quantity=${this.quantity}`;
    }
}
