window.onload = function() {

  document.getElementsByClassName("provider-name")[0].innerText = certificatesList[0].provider
  document.getElementsByClassName("cert-prov-logo")[0].src = certificatesList[0].logo

  coursesAdder(".courses", coursesList);

}
