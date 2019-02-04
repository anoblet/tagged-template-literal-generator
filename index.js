export const generator = (tag, scope, props, template) => {
    const dynamicFunction = new Function('tag', 'scope', 'props', 'return tag`' + template + '`');
    return dynamicFunction(tag, scope, props, tag);
}

// Using a regular function instead of an arrow function allow us to bind (this) and retain context
export const strToTag = function(str, tag) {
  const convert = new Function("tag", "return tag`" + str + "`").bind(this);
  return convert(tag);
};
