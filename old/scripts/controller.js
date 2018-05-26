$(document).ready(function() {
  coursesAdder(".courses", coursesList);
  coursesAdder( ".currently-learning", coursesList);
  certificatesAdder(".certificates-list", certificatesList);
  navHider();
});
