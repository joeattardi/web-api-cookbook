/**
 * Example 2-5. Attempting to serialize an object with a Date property
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const userProfile = {
  firstName: 'Ava',
  lastName: 'Johnson',

  // This date represents June 2, 2025.
  // Months start with zero but days start with 1.
  lastUpdated: new Date(2025, 5, 2);
}

const json = JSON.stringify(userProfile);

