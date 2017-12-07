window.onload = function() {
  var indicator = document.getElementsByClassName("indicator")[0];
  var providerLink = document.getElementsByClassName("provider-link")[0];
  var coursesLink = document.getElementsByClassName("courses-link")[0];
  var providerName = document.getElementsByClassName("provider-name")[0];
  var provider = document.getElementsByClassName("provider")[0];
  var indicatorContainer = document.getElementsByClassName("indicator-container")[0];
  var coursesName = document.getElementsByClassName("courses-name")[0];

  function displayData() {
    // indicator.value = coursesList[0].courses[0].status;
    providerLink.href = coursesList[0].provider_link;
    coursesLink.href = coursesList[0].courses[0].course_url;
    providerName.innerText = coursesList[0].provider;
    // coursesName.innerText = coursesList[0].courses[0].name;
   }

   displayData();

   const MAX_PROGRESS_VALUE = 100;
   var progressBar = document.createElement("progress");
   var progressBarValue = coursesList[1].courses[0].status;
   progressBar.setAttribute("value", progressBarValue);
   progressBar.setAttribute("max", MAX_PROGRESS_VALUE);
   indicatorContainer.appendChild(progressBar);

   var coursesName = document.createElement("div");
   coursesName.setAttribute("class", "courses-name")
   var courseTitle = document.createTextNode(coursesList[0].courses[0].name);
   coursesName.appendChild(courseTitle);
   coursesLink.appendChild(coursesName);
}
