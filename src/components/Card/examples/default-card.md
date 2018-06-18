```jsx
const Card = require('../Card').default;

class DefaultCard extends React.Component {
  render() {
    const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
      <Card title='Card title' body={bodyText} click={this.handleCardClick} />
    )
  }

  handleCardClick() {
    console.log('Card clicked');
  }
}

<DefaultCard />
```