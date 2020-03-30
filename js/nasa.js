class Nasa {
  constructor() {
    this.apiKey = 'BiPP0nRE6SHHTG51sHpLgRb95GlE3WlOlWFCNjTD';
  }

  // fetch recipes from API
  async apod() {

    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`);

    const responseData = await response.json();
    return responseData;
  }
}