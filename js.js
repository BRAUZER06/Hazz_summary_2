const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android()
              || isMobile.BlackBerry()
              || isMobile.iOS()
              || isMobile.Opera()
              || isMobile.Windows()
              );
  }
};

if ( isMobile.any()){
  document.body.classList.add("_touch");
} else { 
  document.body.classList.add("_pc");
}



  
  let we_have_content_1 = document.querySelector(".we_have_content_2_1"),
		numberTop = we_have_content_1.getBoundingClientRect().top,
		start = +we_have_content_1.innerHTML, end = +we_have_content_1.dataset.max;

		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2) {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					we_have_content_1.innerHTML = ++start;
					if(start == end) {
						clearInterval(interval);
					}
				}, 0,01);
			}
		});

    document.addEventListener("DOMContentLoaded", function () {
      window.addEventListener("scroll", function onScroll() {
          let scrollNumbers = document.querySelectorAll(
              ".we_have_content_2_2"
          );
          scrollNumbers.forEach(function (item) {
              let numberTop = item.getBoundingClientRect().top,
                  start = +item.innerHTML,
                  end = +item.dataset.max;
              if (window.pageYOffset > numberTop - window.innerHeight / 2) {
                  this.removeEventListener("scroll", onScroll);
                  var interval = setInterval(function () {
                      item.innerHTML = ++start;
                      if (start == end) {
                          clearInterval(interval);
                      }
                  }, 5);
              }
          });
      });
  });