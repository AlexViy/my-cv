var coursesAdder = function(targetDiv, data) {
  var complete = true;

  if (targetDiv == '.currently-learning') {
    complete = false;
  }


  for (i = 0; i < data.length; i++) {
    var temp =
      '<a class="provider-link" href="' + data[i].provider_link +
      '" target="_blank">' +
      '<div class="courses-provider">' +
      '<img class="provider-logo" src="' + data[i].logo + '">' +
      '<span class="provider-name">' + data[i].provider + '</span>' +
      '</div>' +
      '</a>' +
      '<ul>';

    for (j = 0; j < data[i].courses.length; j++) {
      if (complete == false) {
        if (data[i].courses[j].status !== '100') {
          temp +=
            '<div class="col-12 col-sm-6 col-lg-4 col-xl-3">' +
            '<li>' +
            '<a class="courses-link" href="' + data[i].courses[j].course_url +
            '" target="_blank">' +
            '<div class="courses-info">' +
            '<img src="' + data[i].courses[j].logo + '">' +
            '<span class="courses-name">' + data[i].courses[j].name +
            '</span></div></a>' +
            '<div class="progress" style="height: 6px;">' +
            '<div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar"' +
            ' style="width: ' + data[i].courses[j].status + '%;" ' +
            'aria-valuenow="' + data[i].courses[j].status +
            '" aria-valuemin="0" aria-valuemax="100"></div>' +
            '</div></li>';
        }

      } else {
        if (data[i].courses[j].status == '100') {
          temp +=
            '<li>' +
            '<a class="courses-link" href="' + data[i].courses[j].course_url +
            '" target="_blank">' +
            '<div class="courses-info">' +
            '<img src="' + data[i].courses[j].logo + '">' +
            '<span class="courses-name">' + data[i].courses[j].name +
            '</span></div></a></li></div>';
        }
      }
    }

    temp += '</ul></div>';

    // var emptyDiv = document.createElement('div');

    // emptyDiv.className += "col-12 col-sm-6 col-lg-4 col-xl-3";
    // emptyDiv.innerHTML = temp;
    if (temp.indexOf('courses-info') !== -1) {
      // $(targetDiv).append(emptyDiv);
      $(targetDiv).append(temp);
    }

  }

}
