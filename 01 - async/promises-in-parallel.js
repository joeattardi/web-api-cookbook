// Loading three users at once
Promise.all([
  getUser(1),
  getUser(2),
  getUser(3)
]).then(users => {
  // users is an array of user objects - the values returned from
  // the parallel getUser calls
}).catch(error => {
  // If any of the above Promises are rejected
  console.error('One of the users failed to load:', error);
});
