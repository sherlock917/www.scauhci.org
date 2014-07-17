(function () {

  window.onload = function () {
    var header = document.getElementById('header');
    var clonedNode = document.createElement('div');
    clonedNode.className = 'cloned-content';
    clonedNode.innerHTML = document.getElementById('main').innerHTML;
    header.appendChild(clonedNode);
  }

  document.onscroll = function () {
    document.querySelector('.cloned-content').style.marginTop = - document.body.scrollTop + 'px';
  }

})();