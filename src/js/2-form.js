const StorageKey = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(StorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  formEl.elements.email.value = formData.email;
  formEl.elements.message.value = formData.message;
}

formEl.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(StorageKey, JSON.stringify(formData));
});

formEl.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(StorageKey);

  formData.email = '';
  formData.message = '';

  formEl.reset();
});
