const nasa = new Nasa;

const ui = new UI;

const apodEl = document.getElementById('apod');
const display = document.getElementById('display');

apodEl.addEventListener('click', getApod);

// Get APOD
function getApod() {
  display.innerHTML = '';
  nasa.apod()
    .then(results => {

      console.log(results);
      ui.paintApod(results);
    })
    .catch(err => {
      display.textContent = err;
    });
}