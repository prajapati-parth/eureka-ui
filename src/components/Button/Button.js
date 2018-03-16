import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * The text to be displayed on the button.
   */
  text: PropTypes.string
}

class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>
  }
}

Button.propTypes = propTypes;

export default Button