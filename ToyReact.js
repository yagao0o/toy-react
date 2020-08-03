export let ToyReact = {
  createElement(type, attributes, ...children) {
      console.log(arguments);
      return document.createElement(type);
  }
};
