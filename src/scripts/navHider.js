var navHider = function () {
  var togg = document.querySelector('.navbar-toggler');
  var collapse = document.querySelector('.navbar-collapse');

  collapse.addEventListener('click', function(){
        if (window.innerWidth < 992) {
          togg.click();
        }
  })}
