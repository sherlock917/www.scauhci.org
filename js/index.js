(function () {

  // dom extensions
  HTMLElement.prototype.addClass = function (classNames) {
    this.className += ' ' + classNames
  }
  HTMLElement.prototype.removeClass = function (classNames) {
    classNames = classNames.split(' ');
    for (var i = 0; i < classNames.length; i++) {
      this.className = this.className.replace(classNames[i], '');
    }
  }
  HTMLElement.prototype.hasClass = function (classNames) {
    this.className += ' ';
    classNames = classNames.split(' ');
    for (var i = 0; i < classNames.length; i++) {
      if (!this.className.match(classNames[i] + ' ')) {
        this.className = this.className.substring(0, this.className.length - 1);
        return false
      }
    }
    this.className = this.className.substring(0, this.className.length - 1);
    return true
  }

  // utils
  function $ (selector) {
    var elems = document.querySelectorAll(selector);
    if (elems.length > 1) {
      return elems
    } else {
      return elems[0]
    }
  }

  // event handlers
  document.onscroll = function () {
    hideHeader();
    detectScroll();
  }

  $('.header-btn').onclick = hideHeader;

  // functions
  function hideHeader () {
    if ($('.header').hasClass('header-expand')) {
      $('.header').removeClass('header-expand');
    }
  }

  function detectScroll () {
    if (document.body.scrollTop > 400 && document.body.scrollTop < 700 && !$('.row-3').hasClass('intro-hightlight')) {
      $('.row-3').addClass('intro-hightlight');
    } else if (document.body.scrollTop > 700 && !$('.row-2').hasClass('news-hightlight')) {
      $('.row-2').addClass('news-hightlight');
    }
  }

})();