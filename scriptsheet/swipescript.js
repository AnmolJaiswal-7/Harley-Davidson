var slider = new Swiper("#swipe-container", {
  slidesPerView: 1,
  loop:true,
  spaceBetween:20,
  lazyLoading:true,
  keyboard: {
    enabled: true
  },
  navigation: {
    prevEl: "#swipe-left",
    nextEl: "#swipe-right"
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 5000, 
    pauseOnMouseEnter: true, 
  },
})
  