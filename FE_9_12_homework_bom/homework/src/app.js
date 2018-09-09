const rootNode = document.getElementById('root');
let nul = 0;
let todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];
let buttonAdd = document.getElementById('buttonAdd');
buttonAdd.onclick = function () {
    location.hash = 'add';
    let x = location.hash;
    document.getElementById('part2').style.display = 'flex'+x;
    document.getElementsByTagName('BODY')[nul].onhashchange = function() {
        myFunction()
    };
};
function myFunction() {
    document.getElementById('part1').style.display = 'none';
    document.getElementById('part2').style.display = 'block';
}
let buttonSave = document.getElementById('buttonSave');
let buttonCancel = document.getElementById('buttonCancel');
buttonSave.onclick = function () {

    let input = document.getElementById('input');
    if(input.value ==='') {
        buttonAdd.disabled;
        input.value = '';
    }else{
        todoItems.push(
            {isDone: false, id: 12345, description: input.value});
        console.log(todoItems);
        let li = document.createElement('li');
        li.id = 'li';
        let textnode = document.createElement('BUTTON');
        textnode.id = 'text';
        textnode.className = 'text';
        textnode.innerText = input.value;
        localStorage.setItem('key' , input.value );
        let checkBox = document.createElement('IMG');
        checkBox.setAttribute('src' , 'src/../assets/img/todo-s.png');
        checkBox.setAttribute('width' , '20');
        let deleteImage = document.createElement('IMG');
        deleteImage.setAttribute('src' , 'src/../assets/img/remove-s.jpg');
        deleteImage.setAttribute('width' , '20');
        deleteImage.id = 'delete';
        li.appendChild(checkBox);
        li.appendChild(textnode);
        li.appendChild(deleteImage);
        document.getElementById('list').append(li);
        console.log(localStorage.getItem('key'));
        input.value = '';
        location.hash = '';
        let x = location.hash;
        document.getElementById('part1').style.display = 'inline'+x;
        document.getElementsByTagName('BODY')[nul].onhashchange = function() {
            document.getElementById('part2').style.display = 'none';
        };
        checkBox.onclick = function (){
            checkBox.setAttribute('src' , 'src/../assets/img/done-s.png');
            document.getElementById('text').style.background = 'grey';
            document.getElementById('list').append(li);
        };
        deleteImage.onclick = function (){
            li.remove();
        };
        textnode.onclick = function () {
            location.hash = 'mod';
            document.getElementById('part3').style.display = 'inline'+x;
            document.getElementById('part1').style.display = 'none';
            let inputMod = document.getElementById('inputMod');
            inputMod.value = localStorage.getItem('description');
        };
    }
};

buttonCancel.onclick = function () {
    location.hash = '';
    let x = location.hash;
    document.getElementById('part1').style.display = 'inline'+x;
    document.getElementsByTagName('BODY')[nul].onhashchange = function() {
        document.getElementById('part2').style.display = 'none';
    };
};
// Your code goes here

// rootNode.appendChild(/* Append your list item node*/);
