require('datejs');

const combineUsers = (...args) => {
  const combinedObject = {
    users: [],

  merge_date:new Date().toString('M/d/yyyy')
  }

  args.forEach(internalArray => {
    combinedObject.users.push(...internalArray);
  });

return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};