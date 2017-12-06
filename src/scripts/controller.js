console.log(coursesList);


window.onload = function() {
  document.getElementsByTagName("progress")[0].value = coursesList[1].courses[0].status
  document.getElementsByClassName("provider-link")[0].href = coursesList[0].provider_link
  document.getElementsByClassName("courses-link")[0].href = coursesList[0].courses[0].course_url
  document.getElementsByClassName("provider-name")[0].innerText = coursesList[0].provider
  document.getElementsByClassName("courses-name")[0].innerText = coursesList[0].courses[0].name
}
