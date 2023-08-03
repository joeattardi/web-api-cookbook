/**
 * Example 2-10. Using a factory that adds a toJSON function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

/**
 * A factory function to create a user profile object,
 * with the lastUpdated property set to today and a toJSON method.
 *
 * @param firstName The user's first name
 * @param lastName The user's last name
 */
function createUser(firstName, lastName) {
  return {
    firstName,
    lastName,
    lastUpdated: new Date(),
    toJSON() {
      return {
        firstName: this.firstName,
        lastName: this.lastName,
        lastUPdated: this.lastUpdated.getTime();
      }
    }
  }
}

const userProfile = createUser('Ava', 'Johnson');
