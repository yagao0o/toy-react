export let ToyReact = {
  createElement(type, attributes, ...children) {
    let element = document.createElement(type);
    console.log(arguments);
    for (let name in attributes) {
        // element[name] = attributes[name] // 错误，需要和HTML保持一致
        element.setAttribute(name, attributes[name]);
    }
    for(let child of children){
        if(typeof child === 'string') {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    }
    return element;
  },
};
