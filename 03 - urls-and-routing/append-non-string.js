const url = new URL('https://example.com/api/search?objectType=user');

// The resulting URL has the query string:
//  ?objectType=user&name=null&role=undefined
url.searchParams.append('name', null);
url.searchParams.append('role', undefined);
