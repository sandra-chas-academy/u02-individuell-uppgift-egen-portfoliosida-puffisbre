const burgerMenu = document.querySelector('.burger-menu-container');
const menuList = document.querySelector('.menu-list');
const homeImage = document.querySelector('.home-image');
const aboutImage = document.querySelector('.about-image');
const homeText = document.querySelector('.home-text');
const aboutText = document.querySelector('.about-text');
const welcomeContainer = document.querySelector('.welcome-container');


burgerMenu.addEventListener('click', () =>{
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
        if(welcomeContainer != null){
          welcomeContainer.style.marginTop = '0%';
        }
      } else {
        menuList.style.display = "none";
        if(welcomeContainer != null){
          welcomeContainer.style.marginTop = '30%';
        }
      }
});




