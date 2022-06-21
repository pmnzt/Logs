import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { Template } from './classes/Template.js';
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const list = new Template(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.querySelector('#type').value;
    const toFrom = document.querySelector('#tofrom').value;
    const details = document.querySelector('#details').value;
    const amount = document.querySelector('#amount').valueAsNumber;
    let values;
    values = [toFrom, details, amount];
    let doc;
    if (type == 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type, 'start');
});
