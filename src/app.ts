import { Invoice } from './classes/Invoice.js'
import { Payment } from './classes/Payment.js'
import { Template } from './classes/Template.js'
import { HasFormat } from './interfacses/HasFormat'

const form = document.querySelector('form') as HTMLFormElement
const ul = document.querySelector('ul') as HTMLUListElement

const list = new Template(ul, form)

form.addEventListener('submit', (e: Event) => { 
    const submitButton = (document.querySelector('.submitButton') as HTMLButtonElement)
    if(submitButton.innerText !== 'Add') return 
    e.preventDefault()

    const type = (document.querySelector('#type') as HTMLSelectElement).value
    const toFrom = (document.querySelector('#tofrom') as HTMLInputElement).value
    const details = (document.querySelector('#details') as HTMLInputElement).value
    const amount = (document.querySelector('#amount') as HTMLInputElement).valueAsNumber

    let values: [string, string, number]
    values = [toFrom, details, amount]
 
   let doc: HasFormat
   if(type == 'invoice') {
     doc = new Invoice(...values)
   } else {
     doc = new Payment(...values)
   } 

   list.render(doc, type, 'start')
}) 