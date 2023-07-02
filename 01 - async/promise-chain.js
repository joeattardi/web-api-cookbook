function getPostTitles(userId) {
  return getUser(userId)
    // Callback is called with the loaded user object
    .then(user => {
      console.log(`Getting posts for ${user.name}`);
      // This `Promise` is also returned from `.then`
      return getPosts(user);
    })
    // Calling `then` on the `getPosts` `Promise`
    .then(posts => {
      // Returns another Promise that will resolve to an array of post titles
      return posts.map(post => post.title);
    })
    // Called if either getUser or getPosts are rejected
    .catch(error => {
      console.error('Error loading data:', error);
    });
}
