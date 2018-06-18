```jsx
const Button = require('../Button').default;

class GradientButton extends React.Component {
  render() {
    return (
      <div>
        <Button text='Read more' theme='blueGradient' click={this.handleClick} />
        <Button text='Read more' theme='greenGradient' click={this.handleClick} />
      </div>
      );
  }

  handleClick() {
    console.log('Gradient button clicked');
  }
}

<GradientButton />
```