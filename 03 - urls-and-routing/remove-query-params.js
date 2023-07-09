function removeQueryParams(inputUrl) {
  const url = new URL(inputUrl);
  url.search = '';

  return url.toString();
}

// Results in 'https://example.com/api/users'
removeQueryParams('https://example.com/api/users?user=sysadmin&q=user');
