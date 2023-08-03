/**
 * Example 5-4. An encapsulated database
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const contactsDb = {
  open(onSuccess) {
    const request = indexedDB.open('contacts');

    request.addEventListener('upgradeneeded', () => {
      const db = request.result;
      db.createObjectStore('contacts', {
        keyPath: 'id',
        autoIncrement: true
      });
    }); 

    request.addEventListener('success', () => {
      this.db = request.result;
      onSuccess();
    });
  },

  getContacts(onSuccess) {
    const request = this.db
      .transaction(['contacts'], 'readonly')
      .objectStore('contacts')
      .getAll();

    request.addEventListener('success', () => {
      console.log('Got contacts:', request.result);
      onSuccess(request.result);
    });
  },

  // other operations follow similarly
};
