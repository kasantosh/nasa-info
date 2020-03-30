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

  clearDisplay() {
    this.display.innerHTML = '';
  }
}