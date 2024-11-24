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




let educationList = [];
let orientationList = [];
let dateList = [];
let locationList = [];
let typeList = [];

let companyList = [];
let jobOrientationList = [];
let jobDateList = [];
let jobLocationList = [];
let jobTypeList = [];

window.onload = () => {
    getEducationData();
    getJobData();
}

async function getEducationData() {
    const url = "../json/education.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      json.forEach(element => {
        educationList.push(element.education);
        orientationList.push(element.orientation);
        dateList.push(element.date);
        locationList.push(element.location);
        typeList.push(element.type);
      });
      assignEducationData();
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getJobData() {
    const url = "../json/job.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      json.forEach(element => {
        companyList.push(element.company);
        jobOrientationList.push(element.joborientation);
        jobDateList.push(element.jobdate);
        jobLocationList.push(element.joblocation);
        jobTypeList.push(element.jobtype);
      });
      assignJobData();
    } catch (error) {
      console.error(error.message);
    }
  }

  function assignJobData(){
    firstJobOrientationTitle.innerHTML = jobOrientationList[0];
    firstCompanyTitle.innerHTML = companyList[0];
    firstJobDateTitle.innerHTML = jobDateList[0];
    firstJobLocationTitle.innerHTML = jobLocationList[0];
    firstJobTypeTitle.innerHTML = jobTypeList[0];

    secondJobOrientationTitle.innerHTML = jobOrientationList[1];
    secondCompanyTitle.innerHTML = companyList[1];
    secondJobDateTitle.innerHTML = jobDateList[1];
    secondJobLocationTitle.innerHTML = jobLocationList[1];
    secondJobTypeTitle.innerHTML = jobTypeList[1];

    thirdJobOrientationTitle.innerHTML = jobOrientationList[2];
    thirdCompanyTitle.innerHTML = companyList[2];
    thirdJobDateTitle.innerHTML = jobDateList[2];
    thirdJobLocationTitle.innerHTML = jobLocationList[2];
    thirdJobTypeTitle.innerHTML = jobTypeList[2];
  }


  function assignEducationData(){
    firstOrientationTitle.innerHTML = orientationList[0];
    firstEducationTitle.innerHTML = educationList[0];
    firstDateTitle.innerHTML = dateList[0];
    firstLocationTitle.innerHTML = locationList[0];
    firstTypeTitle.innerHTML = typeList[0];

    secondOrientationTitle.innerHTML = orientationList[1];
    secondEducationTitle.innerHTML = educationList[1];
    secondDateTitle.innerHTML = dateList[1];
    secondLocationTitle.innerHTML = locationList[1];
    secondTypeTitle.innerHTML = typeList[1];

    thirdOrientationTitle.innerHTML = orientationList[2];
    thirdEducationTitle.innerHTML = educationList[2];
    thirdDateTitle.innerHTML = dateList[2];
    thirdLocationTitle.innerHTML = locationList[2];
    thirdTypeTitle.innerHTML = typeList[2];
  }

 

  

  