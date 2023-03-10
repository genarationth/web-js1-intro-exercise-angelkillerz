function changeName(){
    let nameInput = prompt('What is your name');
    let name = document.getElementById('name');
    name.innerHTML = nameInput;
}