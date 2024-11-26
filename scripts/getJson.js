const firstOrientationTitle = document.querySelector('.first-orientation-title');
const firstEducationTitle = document.querySelector('.first-education-title');
const firstLocationTitle = document.querySelector('.first-location-title');
const firstTypeTitle = document.querySelector('.first-type-title');
const firstDateTitle = document.querySelector('.first-date-title');

const secondOrientationTitle = document.querySelector('.second-orientation-title');
const secondEducationTitle = document.querySelector('.second-education-title');
const secondLocationTitle = document.querySelector('.second-location-title');
const secondTypeTitle = document.querySelector('.second-type-title');
const secondDateTitle = document.querySelector('.second-date-title');

const thirdOrientationTitle = document.querySelector('.third-orientation-title');
const thirdEducationTitle = document.querySelector('.third-education-title');
const thirdLocationTitle = document.querySelector('.third-location-title');
const thirdTypeTitle = document.querySelector('.third-type-title');
const thirdDateTitle = document.querySelector('.third-date-title');

const firstJobOrientationTitle = document.querySelector('.first-joborientation-title');
const firstCompanyTitle = document.querySelector('.first-company-title');
const firstJobLocationTitle = document.querySelector('.first-joblocation-title');
const firstJobTypeTitle = document.querySelector('.first-jobtype-title');
const firstJobDateTitle = document.querySelector('.first-jobdate-title');

const secondJobOrientationTitle = document.querySelector('.second-joborientation-title');
const secondCompanyTitle = document.querySelector('.second-company-title');
const secondJobLocationTitle = document.querySelector('.second-joblocation-title');
const secondJobTypeTitle = document.querySelector('.second-jobtype-title');
const secondJobDateTitle = document.querySelector('.second-jobdate-title');

const thirdJobOrientationTitle = document.querySelector('.third-joborientation-title');
const thirdCompanyTitle = document.querySelector('.third-company-title');
const thirdJobLocationTitle = document.querySelector('.third-joblocation-title');
const thirdJobTypeTitle = document.querySelector('.third-jobtype-title');
const thirdJobDateTitle = document.querySelector('.third-jobdate-title');



let firstEducation = {};
let secondEducation = {};
let thirdEducation = {};

let firstJob = {};
let secondJob = {};
let thirdJob = {};


async function getData() {
    const url = "../json/cw.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      firstEducation = json[0];
      secondEducation = json[1];
      thirdEducation = json[2];

      firstJob = json[3];
      secondJob = json[4];
      thirdJob = json[5];
      console.log(firstEducation.education);
      assignData();
    } catch (error) {
      console.error(error.message);
    }
  }


  assignData = () => {
    firstJobOrientationTitle.innerHTML = firstJob.joborientation;
    firstCompanyTitle.innerHTML = firstJob.company;
    firstJobDateTitle.innerHTML = firstJob.jobdate;
    firstJobLocationTitle.innerHTML = firstJob.joblocation;
    firstJobTypeTitle.innerHTML = firstJob.jobtype;

    secondJobOrientationTitle.innerHTML = secondJob.joborientation;
    secondCompanyTitle.innerHTML = secondJob.company;
    secondJobDateTitle.innerHTML = secondJob.jobdate;
    secondJobLocationTitle.innerHTML = secondJob.joblocation;
    secondJobTypeTitle.innerHTML = secondJob.jobtype;

    thirdJobOrientationTitle.innerHTML = thirdJob.joborientation;
    thirdCompanyTitle.innerHTML = thirdJob.company;
    thirdJobDateTitle.innerHTML = thirdJob.jobdate;
    thirdJobLocationTitle.innerHTML = thirdJob.joblocation;
    thirdJobTypeTitle.innerHTML = thirdJob.jobtype;

    firstOrientationTitle.innerHTML = firstEducation.orientation;
    firstEducationTitle.innerHTML = firstEducation.education;
    firstDateTitle.innerHTML = firstEducation.date;
    firstLocationTitle.innerHTML = firstEducation.location;
    firstTypeTitle.innerHTML = firstEducation.type;

    secondOrientationTitle.innerHTML = secondEducation.orientation;
    secondEducationTitle.innerHTML = secondEducation.education;
    secondDateTitle.innerHTML = secondEducation.date;
    secondLocationTitle.innerHTML = secondEducation.location;
    secondTypeTitle.innerHTML = secondEducation.type;

    thirdOrientationTitle.innerHTML = thirdEducation.orientation;
    thirdEducationTitle.innerHTML = thirdEducation.education;
    thirdDateTitle.innerHTML = thirdEducation.date;
    thirdLocationTitle.innerHTML = thirdEducation.location;
    thirdTypeTitle.innerHTML = thirdEducation.type;
  }

  getData();