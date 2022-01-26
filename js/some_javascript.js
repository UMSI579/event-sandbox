// We wrap all the JS in a function as a way to contain it so it doesn't
// risk conflicting with other loaded javascript
(function() {
  function updateStatus(message) {
     document.querySelector('#status').textContent = message;
  }
 })();
