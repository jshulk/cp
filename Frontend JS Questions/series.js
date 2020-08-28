function series(taskList, finalCb) {
  return callSeries(taskList, finalCb);
}

function callSeries(taskList, finalCb, error, result) {
  if (taskList.length === 0) {
    return finalCb(error, result);
  }
  const fn = taskList.shift();
  const cb = (error, result) => {
    if (error) finalCb(error);
    else callSeries(taskList, finalCb, error, result);
  };
  fn(cb);
}
