var form = document.createElement('form');
form.id = 'myForm';
form.name = 'login';
// form.action = "google.com";

var inpAge = document.createElement('input');
inpAge.id = 'age';
inpAge.type = 'text';
inpAge.placeholder = 'Age';

var inpUsername = document.createElement('input');
inpUsername.id = 'username';
inpUsername.type = 'text';
inpUsername.placeholder = 'Username';

var inpDate = document.createElement('input');
inpDate.id = 'date';
inpDate.type = 'date';
inpDate.placeholder = "Date dd/mm/yyyy";
inpDate.value = moment().format('L');

var inpSubmit = document.createElement('input');
inpSubmit.id = 'submit';
inpSubmit.type = 'submit';
inpSubmit.value = 'Validate me';

document.body.insertAdjacentElement('beforeend', form);
form.insertAdjacentElement('beforeend', inpAge);
form.insertAdjacentElement('beforeend', inpUsername);
form.insertAdjacentElement('beforeend', inpDate);
form.insertAdjacentElement('beforeend', inpSubmit);


function id(id) {return document.getElementById(id)};

submit.addEventListener('click', validator228);


function validator228(e) {
    
    e.preventDefault();

    if (isNaN(age.value) || 
        age.value < 0 || 
        age.value.includes("e") ||
        age.value.includes(" ") ||
        username.value.includes(" ") ||
        username.value.indexOf('user_', 0) ){

        alert('Eror! wrong inpute!');
    }
    else {

        alert('ok');
    }
    
}


