//Asked to design an API limiter such that "makeHttpRequest" can only be called 4 times a second.
// Any more requests within the second are rejected.
//If the question is just this, then maybe we can use a queue of size 4 and put unix timestamps into it.
// Front will be oldest and rear will be latest call timestamps. Every time a request comes in,
// remove from front till you're in 1 second window, and check if the new request can fit into the queue.

const rateLimiter = (fn, limit, interval) => {
  let requestCount = 0;
  let timeout;
  return (...args) => {
    // call comes in
    // check if we are within the 1000ms
    //if we are check if have reached our limit for this second
    // after 1000ms expires, reset the requestCount
    if (requestCount < limit) {
      fn.apply(args);
      requestCount++;
    }
    if (!timeout) {
      timeout = setTimeout(() => {
        requestCount = 0;
        timeout = null;
      }, interval);
    }
  };
};

const apiCall = () => {
  console.log("limited function called");
};

const limitedApiCall = rateLimiter(apiCall, 4, 60 * 1000);
