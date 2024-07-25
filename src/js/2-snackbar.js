import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 10000,
  resetOnHover: true,
  icon: 'material-icons',
  transitionIn: 'flipInX',
  transitionOut: 'flipOutX',
  position: 'topRight',
  onOpening: function () {
    console.log('callback abriu!');
  },
  onClosing: function () {
    console.log('callback fechou!');
  },
});

const submitForm = document.querySelector('form');

submitForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  })
    .then(delay => {
      iziToast.success({
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
}
