var certificatesAdder = function(target, data) {
  var certificates = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="provider col">' +
        '<div class="provider-info">'+
          '<img src="'+data[i].logo+'">' +
          '<span class="provider-name">' +data[i].provider+'</span>' +
        '</div>' +
            '<ul>';
            for (j = 0; j < data[i].certificates.length; j++) {
              temp +=
              '<li>' +
                '<div class="certificates-info">' +
                  '<img src="'+data[i].certificates[j].icon+'" class="cert-prov-logo">' +
                    '<a class="cert-name" href="'+data[i].certificates[j].url+'" target="_blank">' +
                      data[i].certificates[j].name +
                    '</a>' +
                '</div>' +
              '</li>'
              }
          temp += '</ul></div>';
        }
  certificates.innerHTML = temp;
}
