var certificatesAdder = function(target, data) {
  var temp = '';

  for (i = 0; i < data.length; i++) {
    temp +=
      '<div class="col">' +
        '<a class="provider-link" href="'+data[i].provider_link+'" target="_blank">' +
          '<div class="cert-provider">' +
            '<img class="provider-logo" src="'+data[i].logo+'">' +
            '<span class="provider-name">' +data[i].provider+'</span>' +
          '</div>' +
        '</a>' +
        '<ul>';
        for (j = 0; j < data[i].certificates.length; j++) {
          temp +=
            '<li>' +
              '<a href="'+data[i].certificates[j].url+'" target="_blank">' +
                '<div class="cert-name">' +
                  '<img class="cert-icon" src="'+data[i].certificates[j].icon+'" class="cert-prov-logo">' +
                    '<span class="cert-course-name">'+data[i].certificates[j].name+'</span>' +
                '</div>' +
              '</a>' +
            '</li>';
          }
  temp += '</ul></div></div>';
  }
  $(target).html(temp);
}
