
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');


searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');
}
let menuBtn =document.querySelector('#menu-btn');
let navBar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');

}

let myIcons = document.querySelectorAll('.bx-heart');

myIcons.forEach(e => e.onclick = function() {
    if (this.classList.contains("bx-heart")) {
        this.classList.toggle("bx-heart");
        this.classList.toggle("bxs-heart");
      
      }
})
let myStars = document.querySelectorAll('.bx-star');

myStars.forEach(e => e.onclick = function() {
    if (this.classList.contains("bx-star")) {
        this.classList.toggle("bxs-star");
        this.classList.toggle("bx-star");
      
      }
})


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');

    if(window.scrollY > 650 ){
        document.querySelector('.header').classList.add('active'); 
    }else{
        document.querySelector('.header').classList.remove('active');
    };

    let value = window.scrollY / 10;
    document.querySelector('.home .mountain').style.bottom = `${-value}%`;
    document.querySelector('.home .content').style.bottom = `${value}%`;
    document.querySelector('.home .moon').style.marginTop = `${-value}%`;
    document.querySelector('.home .cloud-1').style.right = `${-value}%`;
    document.querySelector('.home .cloud-2').style.left = `${-value}%`;
 };


