const nasa = new Nasa;

const apod = document.getElementById('apod');

apod.addEventListener('click', getApod);

// Get APOD
function getApod() {
  nasa.apod()
    .then(results => {
      console.log(results);
      console.log(results.explanation);
    })
    .catch(err => console.log(err));
}