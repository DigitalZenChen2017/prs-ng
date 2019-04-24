export class Product {
    id: number;
    Vendor: object;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;

// tslint:disable-next-line: max-line-length
    constructor(productID: number, productVendor: object, partNumber: string, name: string, price: number, unit: string, photoPath: string) {
        this.id = productID;
        this.Vendor = productVendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
    }

    about(): string {
// tslint:disable-next-line: max-line-length
        return `Product: id=${this.id}, Vendor=${this.Vendor}, partNumber=${this.partNumber}, name=${this.name}, price=${this.price}, unit=${this.unit}, photoPath=${this.photoPath}`;
    }
}
