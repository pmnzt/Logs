export class Invoice {
    constructor(clinet, details, amount) {
        this.clinet = clinet;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.clinet} owes ${this.amount} for ${this.details}`;
    }
}
