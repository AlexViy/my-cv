var coursesAdder = function(target, data) {
  var courses = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="col">' +
        '<div class="provider">' +
          '<div class="provider-logo">' +
            '<img src="'+data[i].logo+'">' +
          '</div>' +
            '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
              '<span class="provider-name">'+data[i].provider+'</span>'+
            '</a>' +
          '<ul>';
          for (j = 0; j < data[i].courses.length; j++) {
            temp +=
              '<li>' +
                '<div class="courses-logo">'+
                  '<img src="'+data[i].courses[j].logo+'">' +
                '</div>'+
                '<a class="courses-link" href="'+data[i].courses[j].course_url+'" target="_blank">' +
                  '<div class="courses-name">'+data[i].courses[j].name+'</div>'+
                '</a>' +
                '<div class="progress" style="height: 2px;">' +
                  '<div class="progress-bar" role="progressbar" style="width: '+data[i].courses[j].status+'%;" aria-valuenow="'+data[i].courses[j].status+'" aria-valuemin="0" aria-valuemax="100"></div>' +
                '</div>' +
              '</li>'
          }
          temp +=
            '</ul>' +
          '</div>' +
        '</div>';
  }
  courses.innerHTML = temp;
}
