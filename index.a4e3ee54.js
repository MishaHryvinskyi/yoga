!function(){new Swiper(".mySwiper",{loop:!0,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1.1},768:{slidesPerView:2},1440:{slidesPerView:2}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3}),new Swiper(".upcomingSwiper",{loop:!1,navigation:{nextEl:".gallery__button-next",prevEl:".gallery__button-prev"},spaceBetween:20,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:3}},keyboard:{enabled:!0},autoplay:{delay:5e3},speed:1e3}),new Swiper(".modalSwiper",{loop:!1,spaceBetween:20,slidesPerView:1,breakpoints:{320:{slidesPerView:1},375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1}},keyboard:{enabled:!0},autoplay:{delay:1e4,pauseOnMouseEnter:!0},speed:1e3,pagination:{el:".swiper-pagination",clickable:!0}});var e=document.querySelector(".backdrop-hero"),n=document.querySelector(".upcoming-backdrop");function o(){document.body.style.overflow="",window.removeEventListener("keydown",t),n.classList.add("is-hidden")}function i(){document.body.style.overflow="",window.removeEventListener("keydown",t),e.classList.add("is-hidden")}function d(e){e.target===e.currentTarget&&(i()||o())}function t(e){"Escape"===e.code&&(i()||o())}var r=document.querySelector(".hero-btn-js"),s=document.querySelector(".backdrop-hero"),l=document.querySelector(".close-js"),c=document.querySelector(".open-hoverla-js"),a=document.querySelector(".upcoming-btn-close-js"),w=document.querySelector(".upcoming-backdrop");r.addEventListener("click",(function(){document.body.style.overflow="hidden",window.addEventListener("keydown",t),e.classList.remove("is-hidden")})),l.addEventListener("click",i),s.addEventListener("click",d),c.addEventListener("click",(function(){document.body.style.overflow="hidden",window.addEventListener("keydown",t),n.classList.remove("is-hidden")})),a.addEventListener("click",o),w.addEventListener("click",d)}();
//# sourceMappingURL=index.a4e3ee54.js.map
