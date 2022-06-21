import { HasFormat } from '../interfacses/HasFormat'

export class Invoice implements HasFormat {

    constructor(
        readonly clinet: string, 
        private details: string, 
        public amount: number
        ){}

    format(): string {
        return `${this.clinet} owes ${this.amount} for ${this.details}`
    }
}