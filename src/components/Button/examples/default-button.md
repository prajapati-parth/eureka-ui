```jsx
const Button = require('../Button').default;

class DefaultButton extends React.Component {
  render() {
    return (<Button text='Read more' click={this.handleClick} />);
  }

  handleClick() {
    console.log('Button clicked');
  }
}

<DefaultButton />
```