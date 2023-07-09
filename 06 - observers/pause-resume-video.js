const observer = new IntersectionObserver(entries => {
  if (!entries[0].isIntersecting) {
    video.pause();
  } else {
    video.play()
      .catch(error => {
        // In case there is a permission error auto-playing the video.
        // This avoids an unhandled rejection error which could crash your app.
      });
  }
});
