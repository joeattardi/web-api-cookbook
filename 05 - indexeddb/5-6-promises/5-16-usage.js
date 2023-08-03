/**
 * Example 5-16. Using the promisified database
 * From "Web Browser API Cookbook" by Joe Attardi
 */

async function loadAndPrintContacts() {
  try {
    const db = await openDatabase();
    const contacts = await getContacts();
    console.log('Got contacts:', contacts);
  } catch (error) {
    console.error('Error:', error);
  }
}
