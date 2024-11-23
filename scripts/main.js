const burgerMenu = document.querySelector('.burger-menu-container');
const menuList = document.querySelector('.menu-list');
const homeImage = document.querySelector('.home-image');
const aboutImage = document.querySelector('.about-image');
const homeText = document.querySelector('.home-text');
const aboutText = document.querySelector('.about-text');


burgerMenu.addEventListener('click', () =>{
    if (menuList.style.display === "none") {
        menuList.style.display = "flex";
      } else {
        menuList.style.display = "none";
      }
});

homeImage.addEventListener('click', () => {
    if (homeText.style.display === "none") {
        homeText.style.display = 'flex';
        homeImage.style.filter = 'blur(10px)';
        homeText.addEventListener('click', () =>{
            location.reload();
        })
      } else {
       homeText.style.display = "none";
       homeImage.style.filter = 'none';
      }
});

aboutImage.addEventListener('click', () => {
    if (aboutText.style.display === "none") {
        aboutText.style.display = 'flex';
        aboutImage.style.filter = 'blur(10px)';
        aboutText.addEventListener('click', () =>{
            location.reload();
        })
      } else {
       aboutText.style.display = "none";
       aboutImage.style.filter = 'none';
      }
});


