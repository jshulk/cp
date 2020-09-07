// Write generic function for sum(2)(3)(5)() output 10
// What is XSS and how to prevent it
// What is CSRF
// What is closures
// ReactJS related questions

function compose() {
  var args = arguments;
  var start = args.length - 1;
  return function () {
    var result = args[start].apply(this, arguments);
    var i = start;
    while (i--) {
      result = args[i].call(this, result);
    }
    return result;
  };
}

function curry(fn) {
  return function curried(...args) {
    // if current arguments are >= function's arguments
    // call the fn
    // else, return a new function which calls curried with arguments concatenated with args

    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}
