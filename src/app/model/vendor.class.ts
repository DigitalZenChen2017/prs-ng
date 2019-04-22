export class Vendor {
    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phoneNumber: string;
    email: string;
    preApproved: boolean;

// tslint:disable-next-line: max-line-length
    constructor(id: number, code: string, name: string, address: string, city: string, state: string, zip: string, phoneNumber: string, email: string, preApproved: boolean) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.preApproved = preApproved;
    }

    about(): string {
// tslint:disable-next-line: max-line-length
        return `Vendor: id=${this.id}, code=${this.code}, name=${this.name}, address=${this.address}, city=${this.city}, state=${this.state}, zip=${this.zip}, phoneNumber=${this.phoneNumber}, email=${this.email}, preApproved=${this.preApproved}`;
    }
}