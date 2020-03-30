const nasa = new Nasa;

const apodEl = document.getElementById('apod');

apodEl.addEventListener('click', getApod);

// Get APOD
function getApod() {
  document.getElementById('display').innerHTML = '';
  nasa.apod()
    .then(results => {
      console.log('Apod clicked');
      console.log(results);
      console.log(results.explanation);
    })
    .catch(err => console.log(err));
}