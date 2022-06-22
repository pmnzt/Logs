export class Dialog {
    constructor(header, detalis) {
        this.header = header;
        this.detalis = detalis;
    }
    showDialog() {
        const dialog = document.querySelector('.editDialog');
        // const h = (document.querySelector('.editDialog div #eheader') as HTMLInputElement)
        // const d = (document.querySelector('.editDialog div #edetalis') as HTMLInputElement)
        // h.value = this.header
        // d.value = this.detalis
        dialog.classList.add('active');
    }
}
