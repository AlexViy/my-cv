window.onload = function() {
  var indicator = document.getElementsByClassName("indicator")[0];
  var providerLink = document.getElementsByClassName("provider-link")[0];
  var coursesLink = document.getElementsByClassName("courses-link")[0];
  var providerName = document.getElementsByClassName("provider-name")[0];
  var coursesName = document.getElementsByClassName("courses-name")[0];

  function displayData() {
    indicator.value = coursesList[0].courses[0].status;
    providerLink.href = coursesList[0].provider_link;
    coursesLink.href = coursesList[0].courses[0].course_url;
    providerName.innerText = coursesList[0].provider;
    coursesName.innerText = coursesList[0].courses[0].name;
   }

   displayData();
}
