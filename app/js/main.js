$(function () {
  // табы
  ////////////////////////
  $('.tab').on('click', function (e) {
    // Отключает переход по ссылке куда-то
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

    // this значит добавление идет к тому элементу, на который нажали
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');

    // <div class="tabs-container">
    //   <div class="tabs-wrapper">
    //     <a class="tab tab--active" href="#tab-1">123</a>
    //     <a class="tab " href="#tab-2">456</a>
    //     <a class="tab " href="#tab-3">789</a>
    //   </div>
    //   <div class="tabs-container">
    //     <div class="tabs-content tabs-content--active" id="tab-1">123</div>
    //     <div class="tabs-content" id="tab-2">456</div>
    //     <div class="tabs-content" id="tab-3">789</div>
    //   </div>
    // </div>

  });

  // carousel
  $('.dishes__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow:
      `<button type="button" class="slick-prev">
        <img src="images/arrow-slider-left.svg">
      </button>`,
    nextArrow:
      `<button type="button" class="slick-next">
        <img src="images/arrow-slider-right.svg">
      </button>`,
    responsive: [
      {
        breakpoint: 1241,
        settings: {
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false
        }
      },
    ]
  });

  new WOW().init();
});

const headerBurger = document.querySelector('.header__burger'); //menu-btn
const headerMenu = document.querySelector('.header__menu'); //menu
const body = document.body;

headerBurger.addEventListener('click', function (event) {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  body.classList.toggle('lock');
});



const accordionItems = document.querySelectorAll(".accordion__item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion__top");
    const content = item.querySelector(".accordion__bottom");

    header.addEventListener("click", () => {
        // Закрыть все другие аккордеоны
        accordionItems.forEach((otherItem) => {
            const otherContent = otherItem.querySelector(".accordion__bottom");
            if (otherItem !== item) {
                otherItem.classList.remove("open");
            }
        });

        item.classList.toggle("open");
    });
});



Fancybox.bind("[data-fancybox]", {
  // Your custom options
});