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

let cards = document.querySelector('.cards');
let xhr = new XMLHttpRequest();
xhr.open(
  'GET',
  'https://newsapi.org/v2/top-headlines?country=in&apiKey=093d814de7c14eee8bbec5784c289ec4',
  true
);
xhr.onload = function () {
  let news = JSON.parse(this.responseText);
  let articles = news.articles;
  let showNews = articles.map((news) => {
    return `
                <div class="card">
                    <img src=${news.urlToImage} alt="">
                        <div class="content">
                            <a href="${news.url}" target="_blank">
                            <h2 class = "title">${news.title}</h2>
                            <p>${news.description}</p>
                            <p>Source : ${news.source.name}</p>
                            </a>
                        </div>
                </div>
      `;
  });
  showNews = showNews.join('');
  cards.innerHTML = showNews;
};
xhr.send();

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
