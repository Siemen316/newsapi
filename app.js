//DARK MODE TOGGLE

let body = document.body;
let dark = document.querySelector('.dark');
let nav = document.querySelector('nav');
let a = document.querySelectorAll('a');

dark.addEventListener('click', () => {
  body.classList.toggle('body-white');
  nav.classList.toggle('nav-white');
  a.forEach((dark) => dark.classList.toggle('a-white'));
  let card = cards.firstElementChild;
  Array.from(card).forEach((dark) => dark.classList.toggle('card-white'));
});

//HAMBURGER MENU

let ham = document.querySelector('.ham');
let flex = document.querySelector('.flex');

ham.addEventListener('click', () => flex.classList.toggle('flex-show'));

//API STUFF!

window.addEventListener('load', showNews);

let cards = document.querySelector('.cards');
async function showNews() {
  const res = await fetch('https://kodagu.today/newsarticles');
  const data = await res.json();
  const ui = data
    .map((news) => {
      return `
    <div class="card">
        <img src=${news.image.url} alt="">
            <div class="content">
                <h2 class = "title">${news.title}</h2>
                <p>Category: ${news.newsCategories}</p>
                </a>
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
}

//SEARCH (OPTIONAL)

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
