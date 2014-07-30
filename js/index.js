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
  }

  $('.header-btn').onclick = hideHeader;

  // functions
  function initHeader () {
    var main = $('.main').innerHTML;
    var header = $('.header');
    var headerBackground = document.createElement('div');
    headerBackground.className = 'header-background';
    headerBackground.innerHTML = main;
    header.appendChild(headerBackground);
  }

  function followScroll () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    $('.header-background').style.marginTop = - scrollTop + 'px';
  }

  function hideHeader () {
    if ($('.header').hasClass('header-expand')) {
      $('.header').removeClass('header-expand');
      highlightSlogan();
    }
  }

  function highlightSlogan() {
    $('.slogan').addClass('slogan-hightlighted');
    setTimeout(function () {
      $('.slogan').addClass('slogan-hidden');
      $('.video').style.display = 'block';
      $('.video').addClass('video-show');
    }, 5000);
  }
  
  function fixStyles () {
    $('.header').style.background = 'rgba(255, 255, 255, 0.9)';
  }
  
  // functions to execute (according to the browser)
  // if (navigator.userAgent.indexOf('Chrome') > 0) {
  //   // event handlers
  //   document.onscroll = function () {
  //     followScroll();
  //     hideHeader();
  //   }

  //   // functions
  //   initHeader();
  // } else {
  //   document.onscroll = function () {
  //     hideHeader();
  //   }

  //   fixStyles();
  // }

  fixStyles();

})();