/**
 * Example 16-4. Using the named loggers
 * From "Web Browser API Cookbook" by Joe Attardi
 */

const rendererLogger = createLogger('renderer', 'blue');
const dataLogger = createLogger('data', 'green');

// Outputs with a blue "renderer" prefix
rendererLogger('Rendering component');

// Outputs with a green "data" prefix
dataLogger('Fetching data');
