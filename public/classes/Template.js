export class Template {
    constructor(container) {
        this.container = container;
    }
    render(item, header, pos) {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = header;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.onclick = () => {
            li.remove();
        };
        const editButton = document.createElement('button');
        editButton.innerText = 'edit';
        editButton.onclick = () => {
            h4.innerText = 'edited';
            p.innerText = 'edited';
        };
        const toolsContainer = document.createElement('div');
        toolsContainer.append(deleteButton);
        toolsContainer.append(editButton);
        li.append(toolsContainer);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
