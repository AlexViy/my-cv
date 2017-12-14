window.onload = function() {

  var sraka = document.getElementsByClassName("certificatesList")[0];
  console.log(sraka);
  coursesAdder(".courses", coursesList);

  var temp = '';
  for (i = 0; i < certificatesList.length; i++) {
    temp +=
      '<div class="provider">' +
        '<h2 class="provider-name">' +certificatesList[i].provider+'</h2>' +
        '<ul>';
        for (j = 0; j < certificatesList[i].certificates.length; j++) {
          temp +=
          '<li>' + '<img src="'+certificatesList[i].logo+'" class="cert-prov-logo">' +
            '<a class="cert-name" href="'+certificatesList[i].certificates[j].url+'" target="_blank">' +
              certificatesList[i].certificates[j].name +
            '</a>' +
          '</li>';
        }
    temp += '</ul></div>';
  }
  sraka.innerHTML = temp;
}
