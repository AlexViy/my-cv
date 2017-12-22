var coursesAdder = function(target, data) {
  var courses = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
        '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
          '<div class="courses-provider">' +
            '<img src="'+data[i].logo+'">' +
              '<span class="provider-name">'+data[i].provider+'</span>'+
        '</a>' +
      '</div>' +
        '<ul>';
          for (j = 0; j < data[i].courses.length; j++) {
            temp +=
              '<li>' +
              '<a class="courses-link" href="'+data[i].courses[j].course_url+'" target="_blank">' +
                '<div class="courses-info">'+
                  '<img src="'+data[i].courses[j].logo+'">' +
                  '<span class="courses-name">'+data[i].courses[j].name+'</span>'+
                '</div>'+
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
