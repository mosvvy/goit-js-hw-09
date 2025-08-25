'use strict';

const keyName = 'feedback-form-state';
let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

const loadFromLocalStorage = () => {
  const savedFormData = window.localStorage.getItem(keyName);

  if (savedFormData) {
    formData = JSON.parse(savedFormData);

    form.email.value = formData.email;
    form.message.value = formData.message;
  }
};

const saveInput = event => {
  const inputField = event.target.nodeName;

  switch (inputField) {
    case 'INPUT':
      formData.email = event.target.value;
      break;
    case 'TEXTAREA':
      formData.message = event.target.value;
      break;
  }

  localStorage.setItem(keyName, JSON.stringify(formData));
};

const submitForm = event => {
  event.preventDefault();

  if (Object.values(formData).includes('')) {
    console.log('Fill please all fields');
    return;
  }

  console.log(formData);
  formData = {
    email: '',
    message: '',
  };
  localStorage.removeItem(keyName);
  form.reset();
};

form.addEventListener('input', saveInput);
form, addEventListener('submit', submitForm);

loadFromLocalStorage();
