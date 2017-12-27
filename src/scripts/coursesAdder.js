var coursesAdder = function(target1, target2, data) {
  var courses = document.querySelector(target1);
  var currLearn = document.querySelector(target2);


  for (i = 0; i < data.length; i++) {
    var temp = '';

    temp +=
      '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
        '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
          '<div class="courses-provider">' +
            '<img class="provider-logo" src="'+data[i].logo+'">' +
              '<span class="provider-name">'+data[i].provider+'</span>'+
          '</div>' +
        '</a>' +
        '<ul>';
          for (j = 0; j < data[i].courses.length; j++) {
            temp +=
              '<li>' +
              '<a class="courses-link" href="'+data[i].courses[j].course_url+'" target="_blank">' +
                '<div class="courses-info">'+
                  '<img src="'+data[i].courses[j].logo+'">' +
                  '<span class="courses-name">'+data[i].courses[j].name+'</span>'+
                '</div>'+
              '</a>';
              if(data[i].courses[j].status!=='100') {
                temp +=
                '<div class="progress" style="height: 2px;">' +
                  '<div class="progress-bar" role="progressbar" style="width: '+data[i].courses[j].status+'%;" aria-valuenow="'+data[i].courses[j].status+'" aria-valuemin="0" aria-valuemax="100"></div>' +
                '</div>';
              }
            temp += '</li>';
        }
        temp +=
          '</ul>' +
        '</div>' +
      '</div>';

      var emptyDiv = document.createElement('div');
      emptyDiv.innerHTML = temp;
      if(temp.indexOf('aria-valuenow="100"')) {
        courses

      }
      currLearn.appendChild(emptyDiv);
  }

}
