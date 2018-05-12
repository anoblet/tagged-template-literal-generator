export const generator = (tag, scope, props, template) => {
    const dynamicFunction = new Function('tag', 'scope', 'props', 'return tag`' + template + '`');
    return dynamicFunction(tag, scope, props, tag);
}