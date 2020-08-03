import { ToyReact } from './ToyReact';

class MyComponent {
  render() {
    return (
      <div>
        <span>Hello </span>
        <span>world </span>
        <span>!</span>
      </div>
    );
  }
  setAttribute(name, value) {
    this[name] = value;
  }

  mountTo(parent) {
    let vdom = this.render();
    vdom.mountTo(parent);
  }
}

let a = <MyComponent name="a" id="ida"></MyComponent>;

ToyReact.render(a, document.body);
