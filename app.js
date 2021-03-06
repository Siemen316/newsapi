//DARK MODE TOGGLE
let body = document.body;
let dark = document.querySelector('.dark');
dark.addEventListener('click', () => body.classList.toggle('white'));

//HAMBURGER MENU
let ham = document.querySelector('.ham');
let flex = document.querySelector('.flex');
ham.addEventListener('click', () => flex.classList.toggle('flex-show'));

//API!
window.addEventListener('load', showNews);
const apiURL = 'https://kodagu.today/newsarticles?_sort=published_at:desc';
let cards = document.querySelector('.cards');

async function showNews() {
  try {
    const res = await fetch(apiURL);
    const data = await res.json();
    const ui = data
      .map((news) => {
        return `
      <div data-aos="fade-up" class="card">
          <img src=${news.image.url} alt="">
              <div class="content">
                  <h2 class = "title">${news.title}</h2>
                  <p class = "category">Category : ${news.newsCategories}</p>
                  <div class="details">
                      <p>${new Date(news.published_at).toLocaleDateString()}</p>
                      <a class="btn" href="https://play.google.com/store/apps/details?id=com.kodagu.now">Read more</a>
                  </div>
              </div>
      </div>
      `;
      })
      .join('');
    cards.innerHTML = ui;
  } catch (error) {
    const errorMsg = `
     <div data-aos="fade-up" class="card">
              <div class="content">
                  <img class="server-down" src="/images/server-down.svg"/>
                  <h1 class = "title" style="text-align:center;margin:1rem 0">Cannot Fetch news due to network error</h1>
              </div>
      </div>
    `;
    cards.innerHTML = errorMsg;
  }
}

//AOS!
AOS.init();

//SEARCH
let txt = document.getElementById('txt');
txt.addEventListener('input', () => {
  let value = txt.value.toUpperCase();
  let card = document.querySelectorAll('.card');
  card.forEach((car) => {
    let title = car.querySelector('.title').innerHTML;
    if (title.toUpperCase().includes(value)) {
      car.style.display = 'block';
    } else {
      car.style.display = 'none';
    }
  });
});
