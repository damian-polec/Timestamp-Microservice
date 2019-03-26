const formInput = document.querySelector('form input');
const form = formInput.parentNode.getAttribute('action')
formInput.addEventListener('change',(e) => {
  formInput.parentNode.setAttribute('action', `${form}${e.target.value}`);
  console.log(formInput.parentNode);
})
