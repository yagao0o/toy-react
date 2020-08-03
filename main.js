import { ToyReact, Component } from './ToyReact';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>Hello </span>
        <span>world </span>
        <span>!</span> 
        <div>
            {this.children}
        </div>
      </div>
    );
  }

}

let a = <MyComponent name="a" id="ida">
    <div>Good!</div>
</MyComponent>;

ToyReact.render(a, document.body);
