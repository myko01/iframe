(function () {
  'use strict'
  var form = document.getElementById('depositForm')

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submited');

    window.location.replace("success.html");
  }, false);


  var btn = document.getElementById('decline')

  btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('Declined');

    window.location.replace("decline.html");
  }, false)

})()
