function debounce(fn, delay) {
  var timeout;
  return function () {
    var self = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return fn.apply(self, args);
    }, delay);
  };
}
