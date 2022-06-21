import { HasFormat } from '../interfacses/HasFormat'

export class Payment implements HasFormat {

    constructor(
        readonly recipient: string, 
        private details: string, 
        public amount: number
        ){}

    format(): string {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`
    }
}