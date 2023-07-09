const url = new URL('https://example.com/api/search');

// Contrived example string demonstrating several reserved characters
url.searchParams.append('q', 'admin&user?luke');
