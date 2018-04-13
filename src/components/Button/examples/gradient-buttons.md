```jsx
const Button = require('../Button').default;

class GradientButton extends React.Component {
  render() {
    return (
      <div>
        <Button text='Read more' theme='blueGradient' />
        <Button text='Read more' theme='greenGradient' />
      </div>
      );
  }
}

<GradientButton />
```