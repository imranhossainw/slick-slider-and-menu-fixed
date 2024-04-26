let menu = document.querySelector('.main_menu');

console.log(menu)

 window.addEventListener('scroll',()=>{
    let scrolling = this.scrollY

    if(scrolling>100){
         menu.classList.add('menu_bar')
    }
    else{
        menu.classList.remove('menu_bar')

    }
 })

 
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-backward-fast prev_arrow"></i>',
    nextArrow:'<i class="fa-solid fa-forward-fast next_arrow"></i>',
    dots:true,
  });


  $('.counter').counterUp({
    delay: 1,
    time: 1000
});