window.onload = function() {

  document.getElementsByClassName("provider-name")[0].innerText = certificatesList[0].provider
  document.getElementsByClassName("cert-prov-logo")[0].src = certificatesList[0].logo

  coursesAdder(".courses", coursesList);

//   var certificates = document.querySelector(certificates);
//   var temp = '';
//   for (i = 0; i < certificatesList.length; i++) {
//     temp +=
//       '<div class="provider"' +
//         '<h2 class="provider_name">''</h2>'
//       '<ul>';
//       for (var i = 0; i < certificates.length; i++) {
//         temp +=
//           '<li>' +
//             '<div class="courses-logo">'+
//               '<img src="'+data[i].courses[j].logo+'">' +
//             '</div>'+
//             '<a class="courses-link" href="'+data[i].courses[j].course_url+'" target="_blank">' +
//               '<div class="courses-name">'+data[i].courses[j].name+'</div>'+
//             '</a>'+
//           '</li>'
//         }
//         temp +=
//           '</ul>' +
//         '</div>';
//   }
//
}
