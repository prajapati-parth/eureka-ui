import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components";

import theme from '../../theme/eurekaui-theme';

const propTypes = {
  /**
   * The text to be displayed on the button.
   */
  text: PropTypes.string
}

const SButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: ${props => `${props.theme.button.paddingBaseVertical} ${props.theme.button.paddingBaseHorizontal}` };
  background-color: ${props => props.theme.colors.themeDefault};
  color: ${props => props.theme.colors.themeWhiteBase};
  border-radius: ${props => props.theme.button.borderRadius};

  &:focus,
  &:active,
  &:hover {
    outline: none;
    background-color: ${props => props.theme.colors.themeDark }
  }
`;

class Button extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <SButton>{this.props.text}</SButton>
      </ThemeProvider>
    )
  }
}

Button.propTypes = propTypes;

export default Button