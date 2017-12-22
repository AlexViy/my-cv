var certificatesAdder = function(target, data) {
  var certificates = document.querySelector(target);
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="col">' +
        '<div class="cert-provider">' +
          '<img src="'+data[i].logo+'">' +
          '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
            '<span class="provider-name">' +data[i].provider+'</span>' +
          '</a>' +
        '</div>' +
        '<ul>';
        for (j = 0; j < data[i].certificates.length; j++) {
          temp +=
            '<li>' +
              '<div class="cert-prov-name">' +
                '<img src="'+data[i].logo+'" class="cert-prov-logo">' +
                  '<a class="cert-name" href="'+data[i].certificates[j].url+'" target="_blank">' +
                    data[i].certificates[j].name +
                  '</a>' +
              '</div>' +
            '</li>';
          }
  temp += '</ul></div></div>';
  }
  certificates.innerHTML = temp;
}
