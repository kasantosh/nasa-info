class UI {
  constructor() {
    this.display = document.getElementById('display');
  }

  paintApod(result) {
    this.clearDisplay();

    const markup = `
    <h2 class="text-center">${result.title}</h2>
        <img src="${result.url}" alt="" class="w-100 mb-4">

        <p>${result.explanation}</p>
        
        <div class="row text-primary text-small">
          <div class="col-md-3">
            <small>${result.date}</small>
          </div>
          <div class="col-md-3">
            <small>Service Version: ${result.service_version}</small>
          </div>
          <div class="col-md-3">
            <small><a href="${result.hdurl}" target="_blank">Open HD Image</a></small>
          </div>
        </div>
      </div>
    `;
    this.display.insertAdjacentHTML('afterbegin', markup);
  }

  nasaRover(result) {
    this.clearDisplay();

    result.photos.forEach(photo => {
      // console.log(photo.img_src);
      // console.log(photo.camera.full_name);
      const rover_photo = document.getElementById('rover');
      const markup = `
      <div class="rover-photos d-inline-flex justify-content-center mx-auto">
          <div class="rover-photo-box">
            <a href="${photo.img_src}" target="_blank"><img src="${photo.img_src}" class="w-100" alt="Rover Photos"></a>
          </div>
          <div class="rover-photo-camera">
            <p><small>${photo.camera.full_name}</small> </p>
          </div>
        </div>
      `;
      this.display.insertAdjacentHTML('afterbegin', markup);


    })


  }

  clearDisplay() {
    this.display.innerHTML = '';
  }
}