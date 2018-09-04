let input=document.getElementById('input');
let buttonAdd=document.getElementById('buttonAdd');
let counter = 0;
let ten =10;
let twentyOne =21;
buttonAdd.onclick =function (){
    if(input.value ===''){
        buttonAdd.disabled;
        input.value = '';
    }else if (counter < ten) {
        counter ++;
        let li = document.createElement('li');
        li.draggable = true;
        li.className = 'default_filter';
        let textnode = document.createTextNode(input.value);
        let iconCheck = document.createElement('i');
        let iconDelete = document.createElement('i');
        textnode.className = 'textIn';
        iconDelete.innerText = 'delete';
        iconDelete.className = 'material-icons iconDelete';
        iconCheck.className = 'material-icons';
        iconCheck.innerText = 'check_box_outline_blank';
        li.appendChild(iconCheck);
        li.appendChild(textnode);
        li.appendChild(iconDelete);
        document.getElementById('list').append(li);
        console.log(counter);
        iconCheck.onclick = function () {
            iconCheck.innerText = 'check_box';
        };
        iconDelete.onclick = function () {
            li.remove();
            counter --;
        };
        input.value = '';
        let dragging = null;
        let ulOur = document.getElementById('list');
        ulOur.addEventListener('dragstart', event => {
            dragging = event.target;
        });
        ulOur.addEventListener('dragover', event => {
            if (event.target.className === 'default_filter') {
                let zero = 0;
                let half = 2;
                event.preventDefault();
                let bound = event.target.getBoundingClientRect();
                let set = bound.y + bound.height / half;
                if (event.clientY - set > zero) {
                    event.target.style['border-top'] = '';
                    event.target.style['border-bottom'] = '1px dashed #ccc';
                } else {
                    event.target.style['border-top'] = '1px dashed #ccc';
                    event.target.style['border-bottom'] = '';
                }
            }
        });
        ulOur.addEventListener('drop', event => {
            if (event.target.className === 'default_filter') {
                event.preventDefault();
                if (event.target.style['border-bottom']) {
                    event.target.style['border-bottom'] = '';
                    ulOur.insertBefore(dragging, event.target.nextSibling);
                } else {
                    event.target.style['border-top'] = '';
                    ulOur.insertBefore(dragging, event.target);
                }
            }
        });
        ulOur.addEventListener('dragleave', event => {
            event.target.style['border-bottom'] = '';
            event.target.style['border-top'] = '';
        });
    }else if(counter === ten){
        counter = twentyOne;
        buttonAdd.disabled;
        input.value = '';
        let newElement = document.getElementById('newEl');
        newElement.style.display = 'flex';

    }
    input.value = '';
};
