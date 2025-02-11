//your JS code here. If required.
const student = {
  name: ""
};

function getKeys(obj) {
  return Object.keys(obj);
}

// console.log(getKeys(student));

Object.prototype.getKeys = function() {
  return Object.keys(this);
};
