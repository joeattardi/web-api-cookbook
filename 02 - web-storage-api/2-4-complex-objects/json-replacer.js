function replacer(key, value) {
  if (key === '') {
    // first replacer call, `value` is the object itself.
    // Return all properties of the object, but transform `due`.
    // This uses object spread syntax to make a copy of `value` before
    // adding the `due` property.
    return {
      ...value, // make a copy to avoid altering the original object
      due: value.due.getTime()
    };
  }

  // After the initial transformation, the replacer is called once for each key-value pair.
  // No more replacements are necessary, so return these as is.
  return value;
}

const json = JSON.stringify(todo, replacer);
