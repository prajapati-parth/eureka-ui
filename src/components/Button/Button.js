import React from "react";
import PropTypes from "prop-types";
import styled, { ThemeProvider } from "styled-components";

import commonTheme from "../../theme/eurekaui-theme";

const propTypes = {
  /**
   * The text to be displayed on the button.
   */
  text: PropTypes.string,
  /**
   * The color theme to be applied to the button.
   */
  theme: PropTypes.string,
  /**
   * Click event handler
   */
  click: PropTypes.func.isRequired,
};

const SButton = styled.button`
  display: inline-block;
  margin-bottom: 0;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: none;
  white-space: nowrap;
  padding: ${(props) =>
    `${props.theme.button.paddingBaseVertical} ${props.theme.button.paddingBaseHorizontal}`};
  background-image: ${(props) => {
    switch (props.themeColor) {
      case "blueGradient":
        return `linear-gradient(135deg, ${props.theme.colors.blueGradientStart}, ${props.theme.colors.blueGradientEnd})`;
        break;
      case "greenGradient":
        return `linear-gradient(135deg, ${props.theme.colors.greenGradientStart}, ${props.theme.colors.greenGradientEnd})`;
        break;
      case "pinkGradient":
        return `linear-gradient(135deg, ${props.theme.colors.pinkGradientStart}, ${props.theme.colors.pinkGradientEnd})`;
        break;
      default:
        return `linear-gradient(135deg, ${props.theme.colors.themeDefault}, ${props.theme.colors.themeDefault})`;
    }
  }};
  color: ${(props) => props.theme.colors.themeWhiteBase};
  border-radius: ${(props) => props.theme.button.borderRadius};
  font-size: 16px;
  font-family: inherit;

  &:focus,
  &:active,
  &:hover {
    outline: none;
    background-image: ${(props) => {
      switch (props.themeColor) {
        case "blueGradient":
          return `linear-gradient(135deg, ${props.theme.colors.blueGradientEnd}, ${props.theme.colors.blueGradientStart})`;
          break;
        case "greenGradient":
          return `linear-gradient(135deg, ${props.theme.colors.greenGradientEnd}, ${props.theme.colors.greenGradientStart})`;
          break;
        case "pinkGradient":
          return `linear-gradient(135deg, ${props.theme.colors.pinkGradientEnd}, ${props.theme.colors.pinkGradientStart})`;
          break;
        default:
          return `linear-gradient(135deg, ${props.theme.colors.themeDark}, ${props.theme.colors.themeDark})`;
      }
    }};
  }
`;

class Button extends React.Component {
  buttonClick(event) {
    this.props.click(event);
    event.stopPropagation();
  }

  render() {
    const { text, theme } = this.props;

    return (
      <ThemeProvider theme={commonTheme}>
        <SButton
          onClick={(event) => this.buttonClick(event)}
          themeColor={theme}
        >
          {text}
        </SButton>
      </ThemeProvider>
    );
  }
}

Button.propTypes = propTypes;

export default Button;
