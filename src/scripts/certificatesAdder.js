var certificatesAdder = function(target, data) {
  var certificates = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
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
  certificates.innerHTML = temp;
}
