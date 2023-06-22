let itemBtns = document.querySelectorAll('.service-item');
let activeCategory = [];
let articles = document.querySelectorAll('.services-article');
let pricesSelect = document.querySelectorAll('.prices-select');
let pricesSelectDiscription = document.querySelectorAll('.prices-select-discription');
let activePrice = undefined;
let select = document.querySelector('.select-dropdown');


itemBtns.forEach((el,index) => {
    el.addEventListener('click', () => {
        el.classList.toggle('active');
        activeCategory.push(el.dataset.category);
        if(Array.from(itemBtns).every(elem => elem.classList.contains('active'))) {
            itemBtns.forEach(btn => {
                btn.classList.remove('active');
                activeCategory = [];
                itemBtns[index].classList.add('active');
                activeCategory.push(itemBtns[index].dataset.category);
            })
        }
        setActiveArticle();
    })
})

function setActiveArticle() {
    articles.forEach(el => {
        if (activeCategory.includes(el.classList[1])) {
            el.classList.add('active')
        } else el.classList.remove('active');
    })
}

pricesSelect.forEach((el) => {
    el.addEventListener('click', () => {
        el.classList.toggle('focus');
    })
});

select.addEventListener('click', selectHandler);

function selectHandler(evt) {
  const options = document.querySelector('.select-options')
  const circle = document.querySelector('.circle-dropdown')
  const citySelected = document.querySelector('.city-selected')
  const cityCards = document.querySelectorAll('.city-card')
  const target = evt.target;
  const cityData = evt.target.dataset.city;
  const contactsImg = document.querySelector('.contacts-img');
  const mediaQueryOne = window.matchMedia('(min-width: 768px) and (max-width: 1439px)')

  if (options.classList.contains('open')) {
    options.classList.remove('open');
    circle.classList.remove('open');
    evt.currentTarget.classList.remove('open');
  
  } else {
    options.classList.add('open');
    circle.classList.add('open');
    evt.currentTarget.classList.add('open');
  }

  if (target.classList.contains('city-select')) {
    evt.currentTarget.classList.add('open');
    citySelected.innerHTML = target.innerHTML;
    citySelected.style.fontSize = '16px';

    if(mediaQueryOne.matches){
    contactsImg.style.marginTop = '0px';
    }

    if(select.classList.contains('open')) {
      contactsImg.style.marginTop = '30px';
    }

    cityCards.forEach(card => {
      if (card.dataset.city == cityData) {
        card.classList.add('open')
      } else {
        card.classList.remove('open')
      }
    })
  }
}