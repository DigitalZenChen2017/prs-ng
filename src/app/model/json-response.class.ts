export class JsonResponse {
    data: object;
    errors: object;
    meta: object;

    // tslint:disable-next-line: max-line-length
    constructor(data: object, errors: object, meta: object) {
        this.data = data;
        this.errors = errors;
        this.meta = meta;
    }
}
