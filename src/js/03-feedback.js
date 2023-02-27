import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
const refs = {
    form: document.querySelector('.feedback-form'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle (onFormInput, 500));

populateTextarea();

function onFormInput(e) {
    formData[e.target.name] = e.target.value;
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY');
    console.log(formData);
}

function populateTextarea(e) {
    try {
    const savedMessage = localStorage.getItem('STORAGE_KEY');

    if (savedMessage) {
        formData = JSON.parse(savedMessage);
        const entry = Object.entries(formData);

        entry.forEach(function([name, value]) {
           refs.form[name].value = value;
        });
    }
    }
    catch (error) {
        console.log(error.name);
        console.log(error.message); 
      }
}