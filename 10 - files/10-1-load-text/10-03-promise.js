/**
 * Example 10-3. Promisified readFileContent function
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function readFileContent(file) {
  const reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.addEventListener('load', event => {
      resolve(event.target.result);
    });

    reader.addEventListener('error', reject);

    reader.readAsText(file);
  });
}

const content = await readFileContent(inputFile);
