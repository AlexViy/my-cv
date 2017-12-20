var coursesAdder = function(target, data) {
  var courses = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="provider col">' +
        '<div class="provider-info">' +
          '<img src="'+data[i].logo+'">' +
          '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
            '<span class="provider-name">'+data[i].provider+'</span>'+
          '</a>' +
        '</div>' +
        '<ul>';
        for (j = 0; j < data[i].courses.length; j++) {
          temp +=
            '<li>' +
              '<div class="courses-info">'+
                '<img src="'+data[i].courses[j].logo+'">' +
                '<a class="courses-link" href="'+data[i].courses[j].course_url+'" target="_blank">' +
                  '<span class="courses-name">'+data[i].courses[j].name+'</span>'+
                '</a>' +
              '</div>'+
              '<div class="progress" style="height: 2px;">' +
                '<div class="progress-bar" role="progressbar" style="width: '+data[i].courses[j].status+'%;" aria-valuenow="'+data[i].courses[j].status+'" aria-valuemin="0" aria-valuemax="100"></div>' +
              '</div>' +
            '</li>'
        }
        temp +=
          '</ul>' +
        '</div>';
    }
  courses.innerHTML = temp;
}
