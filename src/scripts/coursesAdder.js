var coursesAdder = function(target, data) {
  var courses = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="provider col">' +
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
              '<div class="indicator-container">'+
                '<progress value="'+data[i].courses[j].status+'" max="100"></progress>'+
              '</div>' +
            '</li>'
        }
        temp +=
          '</ul>' +
        '</div>';
    }
  courses.innerHTML = temp;
}
