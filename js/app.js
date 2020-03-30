const nasa = new Nasa;

const ui = new UI;

const display = document.getElementById('display');

const apodEl = document.getElementById('apod');
const neofeedEl = document.getElementById('neofeed');


apodEl.addEventListener('click', getApod);
neofeedEl.addEventListener('click', nasaRover);



// Get APOD
function getApod() {
  display.innerHTML = '';
  nasa.apod()
    .then(results => {

      // console.log(results);
      ui.paintApod(results);
    })
    .catch(err => {
      display.textContent = err;
    });
}

function nasaRover() {
  nasa.nasaRover()
    .then(results => {
      // console.log(results.photos[0].img_src);
      // console.log(results.photos[0].camera.full_name);

      // console.log(results);
      ui.nasaRover(results);
    })
}