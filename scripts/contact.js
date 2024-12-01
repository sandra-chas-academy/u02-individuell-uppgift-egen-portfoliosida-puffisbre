const textArea = document.querySelector('#messageToSend');
const firstNameField = document.querySelector('#firstName');
const lastNameField = document.querySelector('#lastName');
const inputButton = document.querySelector('.input-button');


inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    textArea.value = '';
    firstNameField.value = '';
    lastNameField.value = '';
    alert("Thanks for the message!")
})

clearAll = () => {
    textArea.value = '';
    firstNameField.value = '';
    lastNameField.value = '';
    console.log("hello")
}

clearAll();