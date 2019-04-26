import { Vendor } from './vendor.class';

export class Product {
    id: number;
    vendor: Vendor;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

    // tslint:disable-next-line: max-line-length
    constructor(productID: number, productVendor: Vendor, partNumber: string, name: string, price: number, unit: string, photoPath: string) {
        this.id = productID;
        this.vendor = productVendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
    }

    about(): string {
        // tslint:disable-next-line: max-line-length
        return `Product: id=${this.id}, Vendor=${this.vendor}, partNumber=${this.partNumber}, name=${this.name}, price=${this.price}, unit=${this.unit}, photoPath=${this.photoPath}`;
    }
}
