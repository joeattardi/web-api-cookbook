/**
 * Example 16-14. Using console.trace
 * From "Web Browser API Cookbook" by Joe Attardi
 */

function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
