import { HasFormat } from "../interfacses/HasFormat";
import { Invoice } from "./Invoice.js";
import { Payment } from "./Payment.js";

export class Template { 
    constructor(
       private container: HTMLUListElement,
       private form: HTMLFormElement
    ){}

    render(item: HasFormat, header: string, pos: 'start' | 'end') {
        const li = document.createElement('li')

        const h4 = document.createElement('h4')
        h4.innerText = header

        li.append(h4)

        const p = document.createElement('p')
        p.innerText = item.format()

        li.append(p)
        
        const deleteButton = document.createElement('button')
        deleteButton.innerText = 'delete'
        deleteButton.onclick = () => {
            li.remove()
        }

        const editButton = document.createElement('button')
        editButton.innerText = 'edit'
        editButton.onclick = () => {
            // card's current values 
            const currentTypeValue = (h4.innerText).toLowerCase()
            const currentCardValueText = p.innerText

            // card values array
            let currentCardValuesArray: string[] = []
            let toFrom: string
            let detalis: string
            let amount: string
            if(currentTypeValue == 'invoice') {
                toFrom = currentCardValueText.split(' ')[0]
                detalis = currentCardValueText.split(' ')[4]
                amount = currentCardValueText.split(' ')[2]

                currentCardValuesArray.push(toFrom)
                currentCardValuesArray.push(detalis)
                currentCardValuesArray.push(amount)
            } else {
                toFrom = currentCardValueText.split(' ')[0]
                detalis = currentCardValueText.split(' ')[5]
                amount = currentCardValueText.split(' ')[3]

                currentCardValuesArray.push(toFrom)
                currentCardValuesArray.push(detalis)
                currentCardValuesArray.push(amount)
            }


            // form container children
            const formContainer = this.form.childNodes[1]
            const formContainerChilds = formContainer.childNodes

            // fields
            const typeField = formContainerChilds[1].childNodes 
            const toFromField = formContainerChilds[3].childNodes
            const detalisField = formContainerChilds[5].childNodes
            const amountField = formContainerChilds[7].childNodes

            // inputs
            const typeSelect = (typeField[3] as HTMLSelectElement)
            const toFromInput = (toFromField[3] as HTMLInputElement)
            const detalisInput = (detalisField[3] as HTMLInputElement)
            const amountInput = (amountField[3] as HTMLInputElement)

            // buttons
            const submitButtom = (formContainerChilds[9] as HTMLButtonElement)

            // update inputs 
            typeSelect.value = currentTypeValue 
            toFromInput.value = currentCardValuesArray[0]
            detalisInput.value = currentCardValuesArray[1]
            amountInput.value = currentCardValuesArray[2]
            submitButtom.innerText = 'update'
            
            // events 
            submitButtom.onclick = () => {
                if(submitButtom.innerText === 'Add') return
                
                let values: [string, string, number]
                values = [toFromInput.value, detalisInput.value, amountInput.valueAsNumber]
                
                let doc: HasFormat
                if(currentTypeValue == 'invoice') {
                    doc = new Invoice(...values)
                } else {
                    doc = new Payment(...values)
                } 

                h4.innerText = typeSelect.value
                p.innerText = doc.format()

                // reset input 
                typeSelect.value = 'invoice'
                toFromInput.value = ''
                detalisInput.value = ''
                amountInput.value = ''
                submitButtom.innerText = 'Add'
            }
            
        }

        const toolsContainer = document.createElement('div')
        toolsContainer.append(deleteButton)
        toolsContainer.append(editButton)

        li.append(toolsContainer)

        if(pos === 'start') {
            this.container.prepend(li)
        } else {
            this.container.append(li)
        }
    }
}