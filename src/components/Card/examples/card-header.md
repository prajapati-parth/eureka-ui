```jsx
const Card = require('../Card').default;

class CardHeader extends React.Component {
  render() {
    const bodyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return (
      <div>
        <Card
          title='Header title'
          body={bodyText}
          theme='blueGradient'
          click={this.handleCardClick}
        />
        <Card
          title='Header title'
          body={bodyText}
          theme='greenGradient'
          click={this.handleCardClick}
          categories={['react', 'react-dom']}
          timeStamp='11 July, 2018'
        />
      </div>
    )
  }

  handleCardClick() {
    console.log('Card clicked');
  }
}

<CardHeader />
```