'use strict';

$(document).ready(function () {
  //skills-bar animation op de skillspagina
  console.log('hello');
  jQuery('.skills-bar').each(function () {
    var precent = $(this).find('.skills-bar-inner').attr('data-precent');
    console.log(precent);
    $(this).find('.skills-bar-inner').animate({
      width: precent
    }, 6000);
  });
});
//# sourceMappingURL=skills.js.map
