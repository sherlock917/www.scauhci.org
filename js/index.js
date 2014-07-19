(function () {

  // dom extensions
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
        return false
      }
    }
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
    blurryHeader();
    if ($('.header').hasClass('header-expand')) {
      hideHeader();
    }
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

  function blurryHeader () {
    $('.header-background').style.marginTop = - document.body.scrollTop + 'px';
  }

  function hideHeader () {
    $('.header').removeClass('header-expand');
  }

  // functions to execute
  initHeader();

})();