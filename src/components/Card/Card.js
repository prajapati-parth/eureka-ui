import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, css } from 'styled-components';

import commonTheme from '../../theme/eurekaui-theme';
import Button from '../Button';

const propTypes = {
  /**
   * Card's title text.
   */
  title: PropTypes.string.isRequired,
  /**
   * Hide the card's border.
   */
  borderNone: PropTypes.bool,
  /**
   * Card's body text.
   */
  body: PropTypes.string,
  /**
   * Action to be performed on card click.
   */
  click: PropTypes.func,
  /**
   * Categories to be displayed.
   */
  categories: PropTypes.arrayOf(PropTypes.string),
  /**
   * Date to be displayed
   */
  timeStamp: PropTypes.string
};

const defaultProps = {
  borderNone: true,
  categories: []
};

const SCard = styled.div`
  background-color: ${props => props.theme.colors.themeWhiteBase};
  padding: 15px 25px;
  border-radius: 5px;
  transition: all .5s;
  margin: 12px 0;
  border: ${props => props.borderNone ? 'none' : `1px solid ${props.theme.colors.borderColor}`};
  border-top: ${props => {
    switch(props.themeColor) {
      case 'blueGradient':
        return `8px solid ${props.theme.colors.blueGradientStart}`;
      case 'greenGradient':
        return `8px solid ${props.theme.colors.greenGradientStart}`;
    }
  }};

  ${props => props.onClick && css`
  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 6px 0px hsla(0, 0%, 0%, 0.2);
  }`}
`;

const SCardTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;

const SCardBody = styled.div`
  margin: 20px 0;
  font-size: 20px;
  color: #646464;

  > a {
    text-decoration: underline;
    color: #000000;
    &:hover {
      cursor: pointer;
    }
  }
`;

const SCardFooter = styled.div`
  margin: 10px 0;
`;

const SCardCategory = styled.span`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  color: #FFFFFF;
  border-radius: 0.25rem;
  text-align: center;
  font-weight: bold;
  margin-right: 3px;
  background-color: ${props => {
    switch(props.themeColor) {
      case 'blueGradient':
        return `${props.theme.colors.blueGradientEnd}`;
      case 'greenGradient':
        return `${props.theme.colors.greenGradientEnd}`;
    }
  }};
`;

const SCardTimestamp = styled.span`
  margin: 10px 10px 5px 0;
  color: #BFBFBF; 
`;

class Card extends React.Component {
  render() {
    const { title, children, click, theme, borderNone, categories, timeStamp,
      showButton, buttonText } = this.props;

    return (
      <ThemeProvider theme={commonTheme}>
        <SCard themeColor={theme} onClick={click} borderNone={borderNone}>
          <SCardTitle>{title}</SCardTitle>
          <SCardTimestamp>{ timeStamp }</SCardTimestamp>
          {
            categories.map((category, idx) => <SCardCategory themeColor={theme} key={idx}>{category}</SCardCategory>)
          }
          <SCardBody>{children}</SCardBody>
          {
            showButton && (<SCardFooter><Button text={buttonText} theme={theme} click={click} /></SCardFooter>)
          }
        </SCard>
      </ThemeProvider>
    )
  }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;