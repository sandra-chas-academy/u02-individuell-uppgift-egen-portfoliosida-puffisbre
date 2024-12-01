const firstProject = document.querySelector('.first-project');
const secondProject = document.querySelector('.second-project');
const thirdProject = document.querySelector('.third-project');
const fourthProject = document.querySelector('.fourth-project');
const theModal = document.querySelector('.projects-modal');
const modalImage = document.querySelector('.projects-modal-image');
const modalTitle = document.querySelector('.projects-modal-title');
const modalText = document.querySelector('.projects-modal-text');
const modalLink = document.querySelector('.projects-modal-link');
const closeModal = document.querySelector('.close-modal');
const projectsContainer = document.querySelector('projects-container');
const projectsParentContainer = document.querySelector('.projects-parent-container');
const loader = document.querySelector('.loader');

let handleData = null;


async function getGitApi() {
    const url = "https://api.github.com/users/puffisbre/repos";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
       handleData = data;
    } catch (error) {
      console.error(error.message);
    }
  }
  projectsParentContainer.style.display = "none";
  getGitApi();
  setTimeout(() => {
 loader.style.display = "none";
 projectsParentContainer.style.display = "flex";
  }, 2000);
  

closeModal.addEventListener('click', () => {
    theModal.style.display = "none";
})

firstProject.addEventListener('click', () => {
theModal.style.display = 'block';
modalImage.src = '../img/firstPortfolio.png';
modalTitle.innerHTML = "My first portfolio";
modalText.innerHTML = "This is my first portfolio I did during this education. Not my own design, but it is my own code.";
modalLink.href = "https://github.com/puffisbre/u01-individuell-uppgift-designskiss-puffisbre";
});

secondProject.addEventListener('click', () => {
    let pigGameData = handleData.filter(obj => {
        return obj.name === 'pig-game';
    })
    theModal.style.display = 'block';
    modalImage.src = '../img/pigGame.png';
modalTitle.innerHTML = `Name: ${pigGameData[0].name}`;
modalText.innerHTML = `Description: ${pigGameData[0].description}`;
modalLink.href = pigGameData[0].html_url;
});

thirdProject.addEventListener('click', () => {
    let twitterCloneData = handleData.filter(obj => {
        return obj.name === 'TwitterClone';
    })
    theModal.style.display = 'block';
    modalImage.src = '../img/twitterClone.png';
    modalTitle.innerHTML = `Name: ${twitterCloneData[0].name}`;
    modalText.innerHTML = `Description: ${twitterCloneData[0].description}`;
    modalLink.href = twitterCloneData[0].html_url;
});

fourthProject.addEventListener('click', () => {
    let quizAppData = handleData.filter(obj => {
        return obj.name === 'team-9-quiz-app';
    })
    theModal.style.display = 'block';
    modalImage.src = '../img/quizApp.png';
    modalTitle.innerHTML = `Name: ${quizAppData[0].name}`;
    modalText.innerHTML = `Description: ${quizAppData[0].description}`;
    modalLink.href = quizAppData[0].html_url;
});

window.onclick = function(event) {
    if (event.target == theModal) {
      theModal.style.display = "none";
    }
  } 