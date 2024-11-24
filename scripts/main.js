const burgerMenu = document.querySelector('.burger-menu-container');
const menuList = document.querySelector('.menu-list');
const homeImage = document.querySelector('.home-image');
const aboutImage = document.querySelector('.about-image');
const homeText = document.querySelector('.home-text');
const aboutText = document.querySelector('.about-text');
const welcomeContainer = document.querySelector('.welcome-container');
const profileImageContainer = document.querySelector('.profile-image-container');
const profileImage = document.querySelector('.profile-image');
const headerContainer = document.querySelector('.header-container');

let treeClicked = false;

profileImageContainer.addEventListener('click', () =>{
 if(treeClicked === false){
  profileImage.style.filter = 'invert(17%) sepia(28%) saturate(627%) hue-rotate(85deg) brightness(99%) contrast(89%))';
  setTimeout(() => {
    profileImageContainer.style.transform = 'scale(1)';
  }, 100);
  treeClicked = true;
 }else if(treeClicked === true){
  profileImageContainer.style.transform = 'scale(0.5)';
  setTimeout(() => {
    profileImageContainer.style.transform = 'scale(1)';
  }, 100);
  profileImage.style.filter = 'invert(17%) sepia(28%) saturate(627%) hue-rotate(85deg) brightness(99%) contrast(89%)';
  treeClicked = false;
 }
})


burgerMenu.addEventListener('click', () =>{
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
        if(welcomeContainer != null){
          welcomeContainer.style.marginTop = '0%';
        }
      } else {
        menuList.style.display = "none";
        if(welcomeContainer != null){
          welcomeContainer.style.marginTop = '20%';
        }
      }
});




