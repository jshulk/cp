const user = {
  name: "some name",
  address: {
    personal: {
      city: "some city",
      area: "some area",
    },
    office: {
      city: "some city",
      area: {
        landmark: "some landmark",
      },
    },
  },
};

// Basic Idea
// we will need an accumulator object for storing the normalized data
// we will also need a parentkey, so that nested object can know about the parent object and form the key accordingly
// loop over all the keys of the object
// check the value is an object or not
// if value is not an object, add the value to the accumulator against parentKey_key
// if value is an object call the function again with obj[key] and parentKey as parentKey_key

function calculateNestedKey(obj, acc, nestedKey) {
  for (let key in obj) {
    let val = obj[key];
    if (typeof val !== "object") {
      acc[nestedKey ? `${nestedKey}_${key}` : key] = val;
    } else {
      calculateNestedKey(val, acc, nestedKey ? `${nestedKey}_${key}` : key);
    }
  }
  return acc;
}
