var form = document.createElement('form');
form.id = 'myForm';
form.name = 'login';
form.action = "https://www.google.com.ua";

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
inpDate.type = 'text';
inpDate.placeholder = "mm/dd/yyyy";
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


function id(id) {
    return document.getElementById(id)
};

submit.addEventListener('click', validator228);


function validator228(e) {
    if (isNaN(age.value) ||
        age.value < 0 ||
        age.value.includes("e") ||
        age.value.includes(" ") ||
        (age.value === "") ||
        (username.value === "") ||
        username.value.includes(" ") ||
        username.value.indexOf('user_', 0) ||
        date.value != moment().format('L')
    ) {
        alert('Eror! wrong inpute!');
        e.preventDefault();
    }
}