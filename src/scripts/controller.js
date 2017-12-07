window.onload = function() {
  var courses = document.querySelector(".courses");
  var temp = '';

    for (i = 0; i < coursesList.length; i++) {
      temp +=
        '<div class="provider">' +
          '<div class="provider-logo">' +
            '<img src="'+coursesList[i].logo+'">' +
          '</div>' +
            '<a class="provider-link" href="'+coursesList[i].provider_link+'" target="_blank">' +
              '<h2 class="provider-name">'+coursesList[i].provider+'</h2>'+
            '</a>' +
          '<ul>';
          for (j = 0; j < coursesList[i].courses.length; j++) {
            temp +=
              '<li>' +
                '<div class="courses-logo">'+
                  '<img src="'+coursesList[i].courses[j].logo+'">' +
                '</div>'+
                '<a class="courses-link" href="'+coursesList[i].courses[j].course_url+'" target="_blank">' +
                  '<div class="courses-name">'+coursesList[i].courses[j].name+'</div>'+
                '</a>' +
                '<div class="indicator-container">'+
                  '<progress value="'+coursesList[i].courses[j].status+'" max="100"></progress>'+
                '</div>' +
              '</li>'
          }
          temp +=
            '</ul>' +
          '</div>';
      }
    courses.innerHTML = temp;
}
