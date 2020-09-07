//copy nested
// loop over the object's keys
// for each key, check to see if it's an object,
// if it's an object, call the function again with obj[key] and assign they return value to acc[key]
// if it's a normal value, added the value to accumulator against the key
function copyNested(obj) {
  if (!obj) return obj;
  return Object.keys(obj).reduce((acc, current) => {
    acc[current] =
      typeof obj[current] === "object" //also check if it is not an array
        ? copyNested(obj[current])
        : obj[current];
    return acc;
  }, {});
}
