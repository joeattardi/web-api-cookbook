Promise.allSettled([
  loadUser(1),
  loadUser(2),
  loadUser(3)
]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log('- User:', result.value.name);
    } else {
      console.log('- Error:', result.reason);
    }
  });
});
// No catch necessary here because allSettled is always fulfilled
