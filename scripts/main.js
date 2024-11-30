const burgerMenu = document.querySelector('.burger-menu-container');
const burgerItem = document.querySelectorAll('.burger-item');
const menuList = document.querySelector('.menu-list');
const homeImage = document.querySelector('.home-image');
const aboutImage = document.querySelector('.about-image');
const homeText = document.querySelector('.home-text');
const aboutText = document.querySelector('.about-text');
const welcomeContainer = document.querySelector('.welcome-container');
const profileImage = document.querySelector('.profile-image');
const headerContainer = document.querySelector('.header-container');
const lampBtn = document.querySelector('.lampButton');
const turnedOff = document.querySelector('.turnedOff');
const turnedOn = document.querySelector('.turnedOn');
const rootVar = document.querySelector(':root');

let treeClicked = false;
let lampClicked = false;
let menuShow = false;
turnedOn.style.display = "none";


lampBtn.addEventListener('click', () => {
 if(lampClicked === false){
  turnedOn.style.display = "block";
  turnedOff.style.display = "none";
  rootVar.style.setProperty('--bg-color', 'black');
  rootVar.style.setProperty('--header-bg-color', 'black');
  rootVar.style.setProperty('--main-text-color', 'white');
  rootVar.style.setProperty('--main-shadow', '0px 0px 5px 0px rgba(255,255,255,1)');
  menuList.style.backgroundColor = ('#253d2c');
    lampClicked = true;
 }else if(lampClicked === true){
  turnedOn.style.display = "none";
  turnedOff.style.display = "block";
  rootVar.style.setProperty('--bg-color', 'white');
  rootVar.style.setProperty('--header-bg-color', 'white');
  rootVar.style.setProperty('--main-text-color', '#253d2c');
  rootVar.style.setProperty('--main-shadow', '0px 0px 5px 0px rgba(0,0,0,1)');
  lampClicked = false;
 }
})


burgerMenu.addEventListener('click', () =>{
    if (menuShow === false) {
        menuList.style.display = "flex";
        menuList.style.animationName = 'menuGrowth';
        burgerMenu.className = 'close-menu';
        headerContainer.style.backgroundColor = ("#253d2c");
        burgerItem.forEach(item => {
          item.style.display = "none";
        })
       menuShow = true;
      } else if(menuShow === true) {
        const closeMenu = document.querySelector('.close-menu');
        headerContainer.style.backgroundColor = ("white");
        closeMenu.className = 'burger-menu-container'
    menuList.style.animationName = 'menuShrink';
    burgerItem.forEach(item => {
      item.style.display = "block";
    })
    setTimeout(() => {
      menuList.style.display = "none";
    }, 100);
        menuShow = false;
      }
});




